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

import { audioEffectsMap } from "./audioEffects";

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

export default class PlayerActionAudio {
  #event;
  #eventData;

  constructor({ event, eventData }: ActionReturn) {
    this.#event = event;
    this.#eventData = eventData;
  }

  _playEffect(caller) {
    const effect = new Audio(audioEffectsMap[caller]);
    effect.volume = 0.05;
    effect.play();
  }

  play(): void {
    if (this.#event === "ATTACK_ALREADY_DEAD") {
      this._playEffect("meleeHit");
    }

    if (this.#event === "ATTACK_KILL") {
      this._playEffect("meleeHit");
    }

    if (this.#event === "ATTACK_HIT") {
      this._playEffect("meleeHit");
    }

    // if (this.#event === "ATTACK_MISS") {
    //   this._playEffect("meleeMiss");
    // }

    if (this.#event === "SPELL_ALREADY_DEAD") {
      this._playEffect("meleeHit"); //'spellHit' later
    }

    if (this.#event === "SPELL_KILL") {
      this._playEffect("meleeHit"); //'spellHit' later
    }

    if (this.#event === "SPELL_HIT") {
      this._playEffect("meleeHit"); //'spellHit' later
    }

    // if (this.#event === "SPELL_MISS") {
    //   this._playEffect("spellMiss");
    // }
  }
}
