import {
  EventType,
  AttackHit,
  AttackKill,
  AttackMiss,
  AttackAlreadyDead,
  SpellHit,
  SpellKill,
  SpellMiss,
  SpellAlreadyDead,
} from "../player/types/ActionEventTypes";

type ActionReturn = {
  event: EventType;
  eventData:
    | AttackHit
    | AttackKill
    | AttackMiss
    | AttackAlreadyDead
    | SpellHit
    | SpellKill
    | SpellMiss
    | SpellAlreadyDead
    | null;
};

export default class TextOutput {
  #event;
  #eventData;

  constructor({ event, eventData }: ActionReturn) {
    this.#event = event;
    this.#eventData = eventData;
  }

  getText(): string {
    if (this.#event === "QUIT") {
      return "quit";
    }

    if (this.#event === "ATTACK_ALREADY_DEAD") {
      return `You hit ${this.#eventData.monsterName}, but it is already dead.`;
    }

    if (this.#event === "ATTACK_KILL") {
      return `You struck ${this.#eventData.monsterName} for ${
        this.#eventData.damageValue
      } damage, killing it. |Attack: ${this.#eventData.attackValue}|`;
    }

    if (this.#event === "ATTACK_HIT") {
      return `You struck ${this.#eventData.monsterName} for ${
        this.#eventData.damageValue
      } damage. |${this.#eventData.monsterName} HP: ${
        this.#eventData.monsterHP
      }| |Attack: ${this.#eventData.attackValue}|`;
    }

    if (this.#event === "ATTACK_MISS") {
      return `You missed ${this.#eventData.monsterName}. |Attack: ${
        this.#eventData.attackValue
      }|`;
    }

    if (this.#event === "SPELL_ALREADY_DEAD") {
      return `You cast ${this.#eventData.spellName} on ${
        this.#eventData.monsterName
      }, but it is already dead.`;
    }

    if (this.#event === "SPELL_KILL") {
      return `You cast ${this.#eventData.spellName} on ${
        this.#eventData.monsterName
      } for ${this.#eventData.damageValue} damage, killing it. |Attack: ${
        this.#eventData.attackValue
      }|`;
    }

    if (this.#event === "SPELL_HIT") {
      return `You cast ${this.#eventData.spellName} on ${
        this.#eventData.monsterName
      } for ${this.#eventData.damageValue} damage. |${
        this.#eventData.monsterName
      } HP: ${this.#eventData.monsterHP}| |Attack: ${
        this.#eventData.attackValue
      }|`;
    }

    if (this.#event === "SPELL_MISS") {
      return `You missed with your ${this.#eventData.spellName} against ${
        this.#eventData.monsterName
      }. |Attack: ${this.#eventData.attackValue}|`;
    }
  }
}
