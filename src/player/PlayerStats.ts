import { Stats } from "player/types/IPlayerStats";
class PlayerStats {
  #str: number;
  #dex: number;
  #con: number;
  #int: number;
  #wis: number;
  #cha: number;
  #maxMana: number;
  #mana: number;
  #maxHP: number;
  #hp: number;
  #ac: number;

  constructor(initialStats: Omit<Stats, "maxHP" | "maxMana">) {
    this.#str = initialStats.str;
    this.#con = initialStats.con;
    this.#dex = initialStats.dex;
    this.#int = initialStats.int;
    this.#wis = initialStats.wis;
    this.#cha = initialStats.cha;
    this.#maxMana = initialStats.mana;
    this.#mana = initialStats.mana;
    this.#maxHP = initialStats.hp;
    this.#hp = initialStats.hp;
    this.#ac = initialStats.ac;
  }

  static fromSave(savedStats: Stats) {
    return new PlayerStats(savedStats);
  }

  toSave(): Stats {
    return {
      str: this.#str,
      con: this.#con,
      dex: this.#dex,
      int: this.#int,
      wis: this.#wis,
      cha: this.#cha,
      maxMana: this.#maxMana,
      mana: this.#mana,
      maxHP: this.#maxHP,
      hp: this.#hp,
      ac: this.#ac,
    };
  }

  setStr(value: number) {
    this.#str = value;
  }

  setDex(value: number) {
    this.#dex = value;
  }

  setCon(value: number) {
    this.#con = value;
  }

  setInt(value: number) {
    this.#int = value;
  }

  setWis(value: number) {
    this.#wis = value;
  }

  setCha(value: number) {
    this.#cha = value;
  }

  setMaxHP(value: number) {
    this.#maxHP = value;
    this._equalizeToMaxHP();
  }

  setMaxMana(value: number) {
    this.#maxMana = value;
    this._equalizeToMaxMana();
  }

  setMana(value: number) {
    this.#mana = value;
    this._equalizeToMaxMana();
  }

  setHP(value: number) {
    this.#hp = value;
    this._equalizeToMaxHP();
  }

  setAC(value: number) {
    this.#ac = value;
  }

  getAttributes(): {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  } {
    const attributes = {
      str: this.#str,
      dex: this.#dex,
      con: this.#con,
      int: this.#int,
      wis: this.#wis,
      cha: this.#cha,
    };
    return attributes;
  }

  getMaxHP(): number {
    return this.#maxHP;
  }

  getMaxMana(): number {
    return this.#maxMana;
  }

  getMana(): number {
    return this.#mana;
  }

  getHP(): number {
    return this.#hp;
  }

  getAC(): number {
    return this.#ac;
  }

  changeStr(newValue: number) {
    this.#str += newValue;
  }

  changeDex(newValue: number) {
    this.#dex += newValue;
  }

  changeCon(newValue: number) {
    this.#con += newValue;
  }

  changeInt(newValue: number) {
    this.#int += newValue;
  }

  changeWis(newValue: number) {
    this.#wis += newValue;
  }

  changeCha(newValue: number) {
    this.#cha += newValue;
  }

  changeMaxHP(value: number) {
    this.#maxHP += value;
    this._equalizeToMaxHP();
  }

  changeMaxMana(value: number) {
    this.#maxMana += value;
    this._equalizeToMaxMana();
  }

  changeMana(value: number) {
    this.#mana += value;
    if (this.#mana <= 0) {
      this.#mana = 0;
    }
    this._equalizeToMaxMana();
  }

  changeHP(value: number) {
    this.#hp += value;
    if (this.#hp <= 0) {
      this.#hp = 0;
    }
    this._equalizeToMaxHP();
  }

  changeAC(value: number) {
    this.#ac += value;
  }

  _equalizeToMaxMana() {
    if (this.#mana > this.#maxMana) {
      this.#mana = this.#maxMana;
    }
  }

  _equalizeToMaxHP() {
    if (this.#hp > this.#maxHP) {
      this.#hp = this.#maxHP;
    }
  }
}

export default PlayerStats;
