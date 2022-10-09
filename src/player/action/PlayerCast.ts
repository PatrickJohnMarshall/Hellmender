import IPlayerInventory from "player/types/IPlayerInventory";

class PlayerCast {
  #playerInventory;

  constructor(playerInventory: IPlayerInventory) {
    this.#playerInventory = playerInventory;
  }

  attack(
    spellID: string,
    monsterName: string,
    validMonsterIDs: string[]
  ): {
    id: string;
    attackValue: number;
    damageValue: number;
  } {
    const target = validMonsterIDs.find(
      (id) => id.toLowerCase() === monsterName.toLowerCase().replace(" ", "")
    );

    if (target) {
      return {
        id: target,
        attackValue: this._getAttackValue(spellID),
        damageValue: this._getDamageValue(spellID),
      };
    }
    throw new Error("Learn to read. Not a valid target.");
  }

  _getAttackValue(spellID: string): number {
    console.log(spellID);
    const attackBonus =
      this.#playerInventory.getKnownSpellStats(spellID).attackBonus;
    return rollDice(1, 20) + attackBonus;
  }

  _getDamageValue(spellID: string): number {
    const damageRange =
      this.#playerInventory.getKnownSpellStats(spellID).damage;
    return rollDice(damageRange.min, damageRange.max);
  }
}

function rollDice(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default PlayerCast;
