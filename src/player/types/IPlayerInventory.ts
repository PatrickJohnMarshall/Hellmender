import Weapon from "../../items/types/Weapon";
import Spell from "spells/types/Spell";

type IPlayerInventory = {
  addWeapon: (weapon: Weapon) => void;
  getWeapons: () => Weapon[];
  equipWeapon: (weaponID: string) => void;
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
