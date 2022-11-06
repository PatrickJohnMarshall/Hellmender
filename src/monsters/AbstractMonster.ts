import TypeRoom from "../tower-layout/types/Room";

abstract class AbstractMonster {
  #id: string;
  #hp: number;
  #maxHP: number;
  #ac: number;
  #name: string;
  #location: TypeRoom;

  constructor({
    id,
    hp,
    ac,
    name,
    location,
  }: {
    id: string;
    hp: number;
    ac: number;
    name: string;
    location: TypeRoom;
  }) {
    this.#id = id;
    this.#hp = hp;
    this.#maxHP = hp;
    this.#ac = ac;
    this.#name = name;
    this.#location = location;
  }

  getID(): string {
    return this.#id;
  }

  abstract describe(): string;

  setLocation(location: TypeRoom) {
    this.#location = location;
  }

  getHP(): number {
    return this.#hp;
  }

  getMaxHP(): number {
    return this.#maxHP;
  }

  getAC(): number {
    return this.#ac;
  }

  getName(): string {
    return this.#name;
  }

  takeDamage(damage: number): void {
    if (this.#hp !== 0) {
      this.#hp -= damage;
    }
    if (this.#hp < 0) {
      this.#hp = 0;
    }
  }

  getLocationId(): string {
    return this.#location.getID();
  }
}

export default AbstractMonster;
