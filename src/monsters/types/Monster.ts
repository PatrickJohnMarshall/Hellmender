interface Monster {
  getID: () => string;
  getHP: () => number;
  getAC: () => number;
  getName: () => string;
  getLocationId: () => string;
  takeDamage: (damage: number) => void;
  describe: () => void;
}

export default Monster;
