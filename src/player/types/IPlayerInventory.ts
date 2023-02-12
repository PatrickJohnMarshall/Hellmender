import Weapon from "../../items/types/Weapon";
import Spell from "spells/types/Spell";
import KeyItems from "items/types/KeyItems";

type IPlayerInventory = {
  makeItemTypeArray: (
    itemArray: Weapon[] | KeyItems[] | Spell[]
  ) => Weapon[] | KeyItems[] | Spell[];
  toSave: () => {
    weapons: string[];
    keyItems: string[];
    spells: string[];
    equippedWeapon: string;
  };
  addWeapon: (weapon: Weapon) => void;
  addKeyItem: (keyItem: KeyItems) => void;
  getWeapons: () => Weapon[];
  equipWeapon: (weaponID: string) => void;
  getEquippedWeaponID: () => string;
  getEquippedWeaponStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
  learnSpell: (spell: Spell) => void;
  getSpells: () => Spell[];
  getKnownSpellStats: (spellID: string) => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
};

export default IPlayerInventory;
