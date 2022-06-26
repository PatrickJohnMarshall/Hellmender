import Weapon from '../../items/types/Weapons';

type IPlayerInventory = {
  addWeapon: (Weapon) => void;
  getWeapon: () => Weapon[];
  equipWeapon: (weaponID: string) => void;
  getEquippedWeaponStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
};

export default IPlayerInventory;
