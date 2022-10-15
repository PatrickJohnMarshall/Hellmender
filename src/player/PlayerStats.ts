type InitialStats = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  hp: number;
  ac: number;
};

class PlayerStats {
  #str: number;
  #dex: number;
  #con: number;
  #int: number;
  #wis: number;
  #cha: number;
  #maxHP: number;
  #hp: number;
  #ac: number;

  constructor(initialStats: InitialStats) {
    this.#str = initialStats.str;
    this.#con = initialStats.con;
    this.#dex = initialStats.dex;
    this.#int = initialStats.int;
    this.#wis = initialStats.wis;
    this.#cha = initialStats.cha;
    this.#maxHP = initialStats.hp;
    this.#hp = initialStats.hp;
    this.#ac = initialStats.ac;
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

  setHP(value: number) {
    this.#hp = value;
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

  changeHP(value: number) {
    this.#hp += value;
  }

  changeAC(value: number) {
    this.#ac += value;
  }
}

export default PlayerStats;
