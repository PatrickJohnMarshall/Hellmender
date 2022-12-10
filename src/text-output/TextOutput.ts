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
  LocationDescription,
  AddedToInventory,
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
    | LocationDescription
    | AddedToInventory
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

    if (this.#event === "INVALID") {
      if (this.#eventData.status === "INVALID_COMMAND") {
        return "You cannot seem to get this creature to do that.";
      }

      if (this.#eventData.status === "INVALID_ATTACK_TARGET") {
        return "You see beyond this mortal - The mortal's eyes do not see anything like that to attack.";
      }

      if (this.#eventData.status === "INVALID_SPELL_TARGET") {
        return "Hmm... this wizard's eyes seem incable of seeing as you do. It sees nothing like that to cast on.";
      }

      if (this.#eventData.status === "NOTHING_TO_TAKE") {
        return `There is nothing of the sort to grasp.`;
      }

      if (this.#eventData.status === "NOTHING_TO_EQUIP") {
        return `You possess nothing of the sort to wield.`;
      }

      if (this.#eventData.status === "INVALID_MOVEMENT") {
        return "Mortals can only move in certain directions, we appologize for any inconvenience.";
      }

      if (this.#eventData.status === "NO_CONNECTION") {
        return "There is nowhere to head to in that direction.";
      }
    }

    if (this.#event === "LOOK") {
      return this.#eventData.description;
    }

    if (this.#event === "MOVE") {
      return this.#eventData.description;
    }

    if (this.#event === "TAKE") {
      return `You take the ${this.#eventData.itemName}.`;
    }

    if (this.#event === "EQUIP") {
      return `You equip the ${this.#eventData.itemName}.`;
    }

    if (this.#event === "ATTACK_ALREADY_DEAD") {
      return `You hit ${this.#eventData.monsterName}, but it is already dead.`;
    }

    if (this.#event === "ATTACK_KILL") {
      return `You struck ${this.#eventData.monsterName} with the ${
        this.#eventData.weaponName
      } for ${this.#eventData.damageValue} damage, killing it. |Attack: ${
        this.#eventData.attackValue
      }|`;
    }

    if (this.#event === "ATTACK_HIT") {
      return `You struck ${this.#eventData.monsterName} with the ${
        this.#eventData.weaponName
      } for ${this.#eventData.damageValue} damage. |${
        this.#eventData.monsterName
      } HP: ${this.#eventData.monsterHP}| |Attack: ${
        this.#eventData.attackValue
      }|`;
    }

    if (this.#event === "ATTACK_MISS") {
      return `You missed ${this.#eventData.monsterName} with the ${
        this.#eventData.weaponName
      }. |Attack: ${this.#eventData.attackValue}|`;
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
