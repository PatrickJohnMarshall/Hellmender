import PlayerCast from "./PlayerCast";
import IPlayerInventory from "player/types/IPlayerInventory";
import Spell from "spells/types/Spell";
import KeyItems from "items/types/KeyItems";
import Weapon from "items/types/Weapon";

type ItemTypeArray = Weapon[] | KeyItems[] | Spell[];

const mockInventory = {
  makeItemTypeArray: () => [] as ItemTypeArray,
  toSave: () => ({
    weapons: [""],
    keyItems: [""],
    spells: [""],
    equippedWeapon: "",
  }),
  addWeapon: () => {},
  addKeyItem: () => {},
  getWeapons: () => [] as Weapon[],
  equipWeapon: () => {},
  getEquippedWeaponID: () => "fist",
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

describe("PlayerCast", () => {
  test("targets valid monster", () => {
    const playerAttack = new PlayerCast(mockInventory);
    const result = playerAttack.attack("fireBall");

    expect(result).toEqual(expect.objectContaining({ id: "megaGrumpkin" }));
  });

  test("returns attack results", () => {
    const playerAttack = new PlayerCast(mockInventory);
    const attackResults = playerAttack.attack("fireBall");

    expect(attackResults.attackValue).toBeLessThan(22);
    expect(attackResults.attackValue).toBeGreaterThan(1);
    expect(attackResults.damageValue).toBeLessThan(37);
    expect(attackResults.damageValue).toBeGreaterThan(5);
  });
});
