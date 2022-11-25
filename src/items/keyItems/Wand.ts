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
    return formatLog([
      "Upon the nightstand is a wand. It jammed firmly in a loaf of stale bread.",
    ]);
  }
}

export default Wand;
