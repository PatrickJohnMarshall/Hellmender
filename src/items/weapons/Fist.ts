import AbstractWeapons from "../AbstractWeapons";
import formatLog from "../../src-legacy/util/formatLog";

class Fist extends AbstractWeapons {
  constructor() {
    const stats = {
      attackBonus: 0,
      damage: { min: 1, max: 4 },
    };
    super({ id: "fist", stats });
  }
  describe(): string {
    return formatLog(["Its your hands."]);
  }
}

export default Fist;
