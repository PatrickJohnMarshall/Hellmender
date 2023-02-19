import buildLayout from "tower-layout/buildLayout";
import generateMonsters from "monsters/generateMonsters";
import generateItems from "items/generateItems";

import PlayerAction from "player/PlayerAction";
import PlayerLocation from "player/PlayerLocation";
import PlayerInventory from "player/PlayerInventory";
import PlayerStats from "player/PlayerStats";

/////

export type FileType = {
  playerName: string | undefined;
  date: string;
  playerLocation: string;
  playerInventory: {
    weapons: string[];
    keyItems: string[];
    spells: string[];
    equippedWeapon: string;
  };
  playerStats: {
    str: number;
    con: number;
    dex: number;
    int: number;
    wis: number;
    cha: number;
    maxMana: number;
    mana: number;
    maxHP: number;
    hp: number;
    ac: number;
  };
  previousMove: string;
};

export class GameState {
  #items;
  #monsters;
  #playerLocation;
  #playerInventory;
  #playerStats;
  #playerAction;
  #storage;
  #playerName;
  #saveSlots = [];

  constructor(storage = localStorage) {
    this.#storage = storage;

    const startingRoom = buildLayout();
    this.#items = generateItems();
    this.#monsters = generateMonsters();

    this.#playerLocation = new PlayerLocation(startingRoom);
    this.#playerInventory = new PlayerInventory({
      equippedWeapon: this.#items.equippedWeapon,
      invWeapons: [],
      invKeyItems: [],
      invSpells: this.#items.activeItems.getSpells(),
    });

    this.#playerStats = new PlayerStats({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
      mana: 10,
      hp: 10,
      ac: 10,
    });

    this.#playerAction = new PlayerAction(
      this.#playerLocation,
      this.#playerInventory,
      this.#playerStats
    );
  }

  get saveSlots() {
    this.#saveSlots = JSON.parse(this.#storage.getItem("saveFiles"));
    return this.#saveSlots;
  }

  set playerName(name: string) {
    if (name.length < 1 || name.length > 32) {
      this.#playerName = "Invalid Name";
    }

    this.#playerName = name;
  }

  get playerName() {
    return this.#playerName;
  }

  get items() {
    return this.#items;
  }

  get monsters() {
    return this.#monsters;
  }

  get playerLocation() {
    return this.#playerLocation;
  }

  get playerInventory() {
    return this.#playerInventory;
  }

  get playerStats() {
    return this.#playerStats;
  }

  get playerAction() {
    return this.#playerAction;
  }

  saveState(saveSlot: number) {
    let date = new Date();

    const saveObject: FileType = {
      // items: this.#items,
      // monsters: this.#monsters,
      playerName: this.#playerName,
      date: date.toLocaleDateString() + " - " + date.toLocaleTimeString(),
      playerLocation: this.#playerLocation.toSave(),
      playerInventory: this.#playerInventory.toSave(),
      playerStats: this.#playerStats.toSave(),
      previousMove: this.#playerAction.toSave(),
    };

    this.#saveSlots[saveSlot] = saveObject;

    this.#storage.setItem("saveFiles", JSON.stringify(this.#saveSlots));
  }

  loadSave(saveSlot: number) {
    const saveFile = JSON.parse(this.#storage.getItem("saveFiles"))[saveSlot];

    this.#items = generateItems({
      inventoryItemIDs: saveFile.playerInventory.weapons,
      equippedWeaponID: saveFile.playerInventory.equippedWeapon,
    });

    // this.#monsters = saveFile.monsters;

    this.#playerLocation = PlayerLocation.formSave(
      buildLayout(saveFile.playerLocation)
    );

    this.#playerInventory = new PlayerInventory({
      equippedWeapon: this.#items.equippedWeapon,
      invWeapons: this.#items.activeItems.getWeapons(),
      invKeyItems: this.#items.activeItems.getKeyItems(),
      invSpells: this.#items.activeItems.getSpells(),
    });

    this.#playerStats = PlayerStats.fromSave(saveFile.playerStats);

    this.#playerAction = PlayerAction.fromSave({
      previousMoveCommand: saveFile.previousMove,
      playerLocation: this.#playerLocation,
      playerInventory: this.#playerInventory,
      playerStats: this.#playerStats,
    });
  }
}
