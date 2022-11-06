import PlayerAction from "./PlayerAction";
import PlayerStats from "./PlayerStats";
import IPlayerInventory from "./types/IPlayerInventory";
import Weapon from "../items/types/Weapon";
import Spell from "spells/types/Spell";

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
    await playerAction.action("move forward", []);
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
    await playerAction.action("attack grumpkin", [
      { ...mockMonster, takeDamage: mockTakeDamage },
    ]);
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
    await playerAction.action("cast fireBall on grumpkin", [
      { ...mockMonster, takeDamage: mockTakeDamage },
    ]);

    expect(mockPlayerStats.getMana()).toEqual(9);
    expect(mockTakeDamage).toHaveBeenCalled();
  });
});
