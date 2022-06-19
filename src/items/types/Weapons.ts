// Weapons, Armor, Consumable, UtilityItems, KeyItems

interface Weapon {
  getID: () => string;
  attackStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
  describe: () => void;
}

export default Weapon;
