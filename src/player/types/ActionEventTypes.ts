export type EventType =
  | "ATTACK_HIT"
  | "SPELL_HIT"
  | "ATTACK_MISS"
  | "SPELL_MISS"
  | "ATTACK_KILL"
  | "SPELL_KILL"
  | "ATTACK_ALREADY_DEAD"
  | "SPELL_ALREADY_DEAD"
  | "LOOK"
  | "MOVE"
  | "TAKE"
  | "NOTHING_TO_TAKE"
  | "QUIT"
  | "INVALID";

export type LocationDescription = {
  location: string;
  description: string;
};

export type AddedToInventory = {
  itemName: string;
};

export type MiscStatus = {
  status: string;
};

export type AttackHit = {
  attackValue: number;
  damageValue: number;
  monsterName: string;
  monsterHP: number;
};

export type AttackMiss = {
  attackValue: number;
  monsterName: string;
};

export type AttackKill = {
  attackValue: number;
  damageValue: number;
  monsterName: string;
};

export type AttackAlreadyDead = {
  monsterName: string;
};

export type SpellHit = {
  spellName: string;
  attackValue: number;
  damageValue: number;
  monsterName: string;
  monsterHP: number;
};

export type SpellMiss = {
  spellName: string;
  attackValue: number;
  monsterName: string;
};

export type SpellKill = {
  spellName: string;
  attackValue: number;
  damageValue: number;
  monsterName: string;
};

export type SpellAlreadyDead = {
  spellName: string;
  monsterName: string;
};
