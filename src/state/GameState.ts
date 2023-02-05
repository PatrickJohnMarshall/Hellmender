import buildLayout from "tower-layout/buildLayout";
import generateMonsters from "monsters/generateMonsters";
import FireBolt from "spells/spells/FireBolt";
import generateItems from "items/generateItems";

import PlayerAction from "player/PlayerAction";
import PlayerLocation from "player/PlayerLocation";
import PlayerInventory from "player/PlayerInventory";
import PlayerStats from "player/PlayerStats";

/////

export class GameState {
  #items;
  #monsters;
  #playerLocation;
  #playerInventory;
  #playerStats;
  #playerAction;

  constructor() {
    const startingRoom = buildLayout();
    const startingSpell = new FireBolt();

    this.#items = generateItems();
    this.#monsters = generateMonsters();

    this.#playerLocation = new PlayerLocation(startingRoom);
    this.#playerInventory = new PlayerInventory(this.#items.defaultWeapon);
    this.#playerInventory.learnSpell(startingSpell);

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
}
