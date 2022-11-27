// Weapons, Armor, Consumable, UtilityItems, KeyItems

interface Weapon {
  getID: () => string;
  getAttackStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
  describe: () => string;
  setLocationID: (location: string) => void;
  getLocationID: () => string;
  removeLocationID: () => void;
}

export default Weapon;
