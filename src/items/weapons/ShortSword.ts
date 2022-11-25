import AbstractWeapons from "../AbstractWeapons";
import formatLog from "../../util/formatLog";

class ShortSword extends AbstractWeapons {
  constructor() {
    const stats = {
      attackBonus: 1,
      damage: { min: 1, max: 6 },
    };
    super({ id: "shortsword", stats });
  }
  describe(): string {
    return formatLog(["Its a short sword."]);
  }

  inLocationDescription(): string {
    return formatLog(["A dull shortsword rests here for testing purposes."]);
  }
}

export default ShortSword;
