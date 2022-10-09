import AbstractMonster from "../AbstractMonster";
import formatLog from "../../src-legacy/util/formatLog";

class Grumpkin extends AbstractMonster {
  describe(): string {
    return formatLog([
      "A small, dangerously round creature with four limbs aiming to do nothing but cause you harm... to your hat specifically.",

      "A thing of malice, its description matches - skin green, greasy and warted. Head full of tusk and matted hair. Gnarled and worn.",

      "It holds a shiv made in the sewers of Draulheim.",
    ]);
  }
}

export default Grumpkin;
