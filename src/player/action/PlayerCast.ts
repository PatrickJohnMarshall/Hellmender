import IPlayerInventory from "player/types/IPlayerInventory";

class PlayerCast {
  #playerInventory;

  constructor(playerInventory: IPlayerInventory) {
    this.#playerInventory = playerInventory;
  }

  attack(spellID: string): {
    attackValue: number;
    damageValue: number;
  } {
    return {
      attackValue: this._getAttackValue(spellID),
      damageValue: this._getDamageValue(spellID),
    };
  }

  _getAttackValue(spellID: string): number {
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
