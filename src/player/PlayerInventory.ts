import Weapon from "../items/types/Weapon";
import KeyItems from "items/types/KeyItems";
import Spell from "spells/types/Spell";

type PlayerInvArgs = {
  equippedWeapon: Weapon;
  invWeapons: Weapon[];
  invKeyItems: KeyItems[];
  invSpells: Spell[];
};

class PlayerInventory {
  #weapons: Weapon[] = [];
  #keyItems: KeyItems[] = [];
  #spells: Spell[] = [];

  #equippedWeapon: Weapon;

  constructor(args: PlayerInvArgs) {
    this.#equippedWeapon = args.equippedWeapon;

    this.#weapons.push(this.#equippedWeapon);
    this.#spells = args.invSpells;

    for (const weapon in args.invWeapons) {
      if (this.#weapons.includes(args.invWeapons[weapon])) {
        continue;
      }

      this.#weapons.push(args.invWeapons[weapon]);
    }

    for (const keyItem in args.invKeyItems) {
      if (this.#keyItems.includes(args.invKeyItems[keyItem])) {
        continue;
      }

      this.#keyItems.push(args.invKeyItems[keyItem]);
    }
  }

  makeItemTypeArray(itemArray: Weapon[] | KeyItems[] | Spell[]) {
    let idList = [];
    for (const item in itemArray) {
      idList.push(itemArray[item].getID());
    }
    return idList;
  }

  toSave() {
    return {
      weapons: this.makeItemTypeArray(this.#weapons),
      keyItems: this.makeItemTypeArray(this.#keyItems),
      spells: this.makeItemTypeArray(this.#spells),
      equippedWeapon: this.#equippedWeapon.getID(),
    };
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
    if (equipped) this.#equippedWeapon = equipped;
  }

  getEquippedWeaponStats() {
    return this.#equippedWeapon.getAttackStats();
  }

  getEquippedWeaponID() {
    return this.#equippedWeapon.getID();
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
