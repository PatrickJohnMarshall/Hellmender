import Weapon from "../items/types/Weapon";
import Spell from "spells/types/Spell";

class PlayerInventory {
  #spells: Spell[] = [];
  #weapons: Weapon[] = [];
  #equipedWeapon: Weapon;

  constructor(defaultWeapon: Weapon) {
    this.#equipedWeapon = defaultWeapon;
    this.#weapons.push(defaultWeapon);
    this.#spells = [];
  }

  addWeapon(weapon: Weapon) {
    this.#weapons.push(weapon);
  }

  getWeapons(): Weapon[] {
    return this.#weapons;
  }

  equipWeapon(weaponID: string) {
    const equipped = this.#weapons.find(
      (weapon) => weapon.getID() === weaponID
    );
    if (equipped) this.#equipedWeapon = equipped;
  }

  getEquippedWeaponStats() {
    return this.#equipedWeapon.getAttackStats();
  }

  learnSpell(spell: Spell) {
    this.#spells.push(spell);
  }

  getSpells(): Spell[] {
    return this.#spells;
  }

  getKnownSpellStats(spellID: string) {
    const knownSpell = this.#spells.find((spell) => spell.getID() === spellID);
    if (knownSpell) return knownSpell.getSpellStats();
  }
}

export default PlayerInventory;
