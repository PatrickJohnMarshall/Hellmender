interface Monster {
  getHP: () => number;
  getAC: () => number;
  takeDamage: (damage: number) => void;
  describe: () => void;
}

export default Monster;
