import AbstractMonster from "../AbstractMonster";
import formatLog from "../../util/formatLog";

class Grumpkin extends AbstractMonster {
  describe(): string {
    return formatLog([
      "A thing of malice, its description matches -",

      "A small, dangerously round creature with four limbs.",

      "Skin green, greasy and warted. Head full of tusk and matted hair. Gnarled and worn.",

      "It holds a shiv made in the sewers of Draulheim.",

      "It aims to do nothing but cause you harm... to your hat specifically.",
    ]);
  }
}

export default Grumpkin;
