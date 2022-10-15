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

  setAttribute(attribute: string, value: number) {
    switch (attribute) {
      case "str":
        this.#str = value;
        break;
      case "dex":
        this.#dex = value;
        break;
      case "con":
        this.#con = value;
        break;
      case "int":
        this.#int = value;
        break;
      case "wis":
        this.#wis = value;
        break;
      case "cha":
        this.#cha = value;
        break;
    }
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

  changeAttribute(attribute: string, newValue: number) {
    switch (attribute) {
      case "str":
        this.#str += newValue;
        break;
      case "dex":
        this.#dex += newValue;
        break;
      case "con":
        this.#con += newValue;
        break;
      case "int":
        this.#int += newValue;
        break;
      case "wis":
        this.#wis += newValue;
        break;
      case "cha":
        this.#cha += newValue;
        break;
    }
  }

  changeHP(value: number) {
    this.#hp += value;
  }

  changeAC(value: number) {
    this.#ac += value;
  }
}

export default PlayerStats;
