interface Monster {
  getID: () => string;
  getHP: () => number;
  getAC: () => number;
  getName: () => string;
  getLocationId: () => string;
  takeDamage: (damage: number) => void;
  describe: () => string;
}

export default Monster;
