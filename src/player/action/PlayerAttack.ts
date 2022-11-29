import IPlayerInventory from "../types/IPlayerInventory";

class PlayerAttack {
  #playerInventory;

  constructor(playerInventory: IPlayerInventory) {
    this.#playerInventory = playerInventory;
  }

  attack(): {
    attackValue: number;
    damageValue: number;
  } {
    return {
      attackValue: this._getAttackValue(),
      damageValue: this._getDamageValue(),
    };
  }

  _getAttackValue(): number {
    const attackBonus =
      this.#playerInventory.getEquippedWeaponStats().attackBonus;
    return rollDice(1, 20) + attackBonus;
  }

  _getDamageValue(): number {
    const damageRange = this.#playerInventory.getEquippedWeaponStats().damage;
    return rollDice(damageRange.min, damageRange.max);
  }
}

function rollDice(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default PlayerAttack;
