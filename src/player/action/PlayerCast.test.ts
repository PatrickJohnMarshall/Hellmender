import PlayerCast from "./PlayerCast";
import IPlayerInventory from "player/types/IPlayerInventory";
import Spell from "spells/types/Spell";
import Weapon from "items/types/Weapon";

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

const mockRoom = {
  getID: () => "",
  addConnections: () => {},
  description: () => {},
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

const mockMonsterArray = ["megaGrumpkin"];

describe("PlayerCast", () => {
  test("targets valid monster", () => {
    const playerAttack = new PlayerCast(mockInventory);
    const result = playerAttack.attack(
      "fireBall",
      "Mega Grumpkin",
      mockMonsterArray
    );

    expect(result).toEqual(expect.objectContaining({ id: "megaGrumpkin" }));
  });

  test("returns attack results", () => {
    const playerAttack = new PlayerCast(mockInventory);
    const attackResults = playerAttack.attack(
      "fireBall",
      "Mega Grumpkin",
      mockMonsterArray
    );

    expect(attackResults.attackValue).toBeLessThan(22);
    expect(attackResults.attackValue).toBeGreaterThan(1);
    expect(attackResults.damageValue).toBeLessThan(37);
    expect(attackResults.damageValue).toBeGreaterThan(5);
  });
});
