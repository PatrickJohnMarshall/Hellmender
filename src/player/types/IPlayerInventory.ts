import Weapon from '../../items/types/Weapons';

type IPlayerInventory = {
  addWeapon: (weapon: Weapon) => void;
  getWeapons: () => Weapon[];
  equipWeapon: (weaponID: string) => void;
  getEquippedWeaponStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
};

export default IPlayerInventory;
