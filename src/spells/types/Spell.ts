interface Spell {
  getID: () => string;
  getSpellStats: () => {
    attackBonus: number;
    damage: { min: number; max: number };
  };
  describe: () => string;
}

export default Spell;
