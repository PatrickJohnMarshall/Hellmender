interface Monster {
  getID: () => string;
  getHP: () => number;
  getAC: () => number;
  getLocationId: () => string;
  takeDamage: (damage: number) => void;
  describe: () => void;
}

export default Monster;
