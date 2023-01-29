import PlayerAttack from "./PlayerAttack";
import IPlayerInventory from "../types/IPlayerInventory";
import Weapon from "../../items/types/Weapon";
import Spell from "spells/types/Spell";

const mockInventory = {
  addWeapon: () => {},
  addKeyItem: () => {},
  getWeapons: () => [] as Weapon[],
  equipWeapon: () => {},
  getEquippedWeaponID: () => "",
  getEquippedWeaponStats: () => ({
    attackBonus: 4,
    damage: { min: 1, max: 8 },
  }),
  learnSpell: () => {},
  getSpells: () => [] as Spell[],
  getKnownSpellStats: () => ({
    attackBonus: 1,
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

describe("PlayerAttack", () => {
  test("targets valid monster", () => {
    const playerAttack = new PlayerAttack(mockInventory);
    const result = playerAttack.attack();

    expect(result).toEqual(expect.objectContaining({ id: "megaGrumpkin" }));
  });

  test("returns attack results", () => {
    const playerAttack = new PlayerAttack(mockInventory);
    const attackResults = playerAttack.attack();

    expect(attackResults.attackValue).toBeLessThan(25);
    expect(attackResults.attackValue).toBeGreaterThan(4);
    expect(attackResults.damageValue).toBeLessThan(9);
    expect(attackResults.damageValue).toBeGreaterThan(0);
  });
});
