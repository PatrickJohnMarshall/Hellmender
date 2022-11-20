import AbstractKeyItems from "items/AbstractKeyItem";
import formatLog from "../../util/formatLog";

class Wand extends AbstractKeyItems {
  constructor() {
    super({ id: "wand" });
  }

  describe(): string {
    return formatLog(["Its a wand."]);
  }

  inLocationDescription(): string {
    return formatLog(["This is a wand."]);
  }
}

export default Wand;
