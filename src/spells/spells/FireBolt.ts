import AbstractSpells from "spells/AbstractSpells";
import formatLog from "util/formatLog";

class FireBolt extends AbstractSpells {
  constructor() {
    const stats = {
      attackBonus: 0,
      damage: { min: 1, max: 10 },
    };
    super({ id: "firebolt", stats });
  }
  describe(): string {
    return formatLog([
      "A simple cantrip that hurls a ball of flame at the caster's enemies.",
    ]);
  }
}

export default FireBolt;
