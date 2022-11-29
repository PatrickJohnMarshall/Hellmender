import Weapon from "../items/types/Weapon";
import KeyItems from "items/types/KeyItems";
import Spell from "spells/types/Spell";

class PlayerInventory {
  #weapons: Weapon[] = [];
  #keyItems: KeyItems[] = [];
  #spells: Spell[] = [];

  #equipedWeapon: Weapon;

  constructor(defaultWeapon: Weapon) {
    this.#equipedWeapon = defaultWeapon;
    this.#weapons.push(defaultWeapon);
    this.#spells = [];
  }

  addWeapon(weapon: Weapon) {
    this.#weapons.push(weapon);
    weapon.removeLocationID();
  }

  addKeyItem(keyItem: KeyItems) {
    this.#keyItems.push(keyItem);
    keyItem.removeLocationID();
  }

  getWeapons(): Weapon[] {
    return this.#weapons;
  }

  getKeyItems(): KeyItems[] {
    return this.#keyItems;
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

  getEquippedWeaponID() {
    return this.#equipedWeapon.getID();
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
