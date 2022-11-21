import PlayerAction from "player/PlayerAction";
import PlayerStats from "player/PlayerStats";
import IPlayerInventory from "./types/IPlayerInventory";
import Weapon from "../items/types/Weapon";
import Spell from "spells/types/Spell";

import PlayerLocation from "player/PlayerLocation";
import PlayerInventory from "player/PlayerInventory";
import buildLayout from "tower-layout/buildLayout";
import { Description } from "./types/ActionEventTypes";
import generateItems from "items/generateItems";

const mockInitialStats = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  mana: 10,
  hp: 10,
  ac: 10,
};

const mockInventory = {
  addWeapon: () => {},
  getWeapons: () => [] as Weapon[],
  equipWeapon: () => {},
  getEquippedWeaponStats: () => ({
    attackBonus: 4,
    damage: { min: 1, max: 8 },
  }),
  learnSpell: () => {},
  getSpells: () => [] as Spell[],
  getKnownSpellStats: () => ({
    attackBonus: 0,
    damage: { min: 6, max: 36 },
  }),
} as IPlayerInventory;

const mockMonster = {
  getID: () => "grumpkin",
  getHP: () => 20,
  getAC: () => 0,
  getName: () => "Grumpkin",
  getLocationId: () => "",
  takeDamage: () => {},
  describe: () => "",
};

const mockRoom = {
  getID: () => "",
  addConnections: () => {},
  description: () => "",
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

const fakeLocation = {
  describe: () => "",
  update: () => {},
  getID: () => "",
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

describe("PlayerAction", () => {
  test("performs a move", async () => {
    const mockForward = jest.fn(() => mockRoom);
    const mockPlayerStats = new PlayerStats(mockInitialStats);
    const location = { ...fakeLocation, forward: mockForward };

    const playerAction = new PlayerAction(
      location,
      mockInventory,
      mockPlayerStats
    );
    await playerAction.action({
      answer: "move forward",
      validMonsters: [],
      validKeyItems: [],
    });
    expect(mockForward).toHaveBeenCalled();
  });

  test("performs an attack", async () => {
    const mockTakeDamage = jest.fn();
    const mockPlayerStats = new PlayerStats(mockInitialStats);
    const location = { ...fakeLocation };

    const playerAction = new PlayerAction(
      location,
      mockInventory,
      mockPlayerStats
    );
    await playerAction.action({
      answer: "attack grumpkin",
      validMonsters: [{ ...mockMonster, takeDamage: mockTakeDamage }],
      validKeyItems: [],
    });
    expect(mockTakeDamage).toHaveBeenCalled();
  });

  test("cast attack spell and have it cost mana", async () => {
    const mockTakeDamage = jest.fn();
    const mockPlayerStats = new PlayerStats(mockInitialStats);
    const location = { ...fakeLocation };

    const playerAction = new PlayerAction(
      location,
      mockInventory,
      mockPlayerStats
    );
    await playerAction.action({
      answer: "cast fireBall on grumpkin",
      validMonsters: [{ ...mockMonster, takeDamage: mockTakeDamage }],
      validKeyItems: [],
    });

    expect(mockPlayerStats.getMana()).toEqual(9);
    expect(mockTakeDamage).toHaveBeenCalled();
  });

  test("players see item description in room", () => {
    const startingRoom = buildLayout();
    const items = generateItems();

    const playerLocation = new PlayerLocation(startingRoom);

    const playerInventory = new PlayerInventory(items.defaultWeapon);

    const playerStats = new PlayerStats({
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

    const playerAction = new PlayerAction(
      playerLocation,
      playerInventory,
      playerStats
    );

    const actionResult = playerAction.action({
      answer: "look",
      validMonsters: [],
      validKeyItems: items.activeItems.getKeyItems(),
    }) as unknown as {
      event: Event;
      eventData: Description;
    };

    expect(
      actionResult.eventData.description.includes("This is a wand")
    ).toBeTruthy();
  });
});
