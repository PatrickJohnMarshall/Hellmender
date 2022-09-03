import Weapon from '../items/types/Weapons';

class PlayerInventory {
  #weapons: Weapon[] = [];
  #equipedWeapon: Weapon;

  constructor(defaultWeapon: Weapon) {
    this.#equipedWeapon = defaultWeapon;
    this.#weapons.push(defaultWeapon);
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
}

export default PlayerInventory;
