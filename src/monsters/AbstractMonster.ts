import TypeRoom from '../tower-layout/rooms/types/Room';

abstract class AbstractMonster {
  #id: string;
  #hp: number;
  #maxHP: number;
  #ac: number;
  #location: TypeRoom;

  constructor({
    id,
    hp,
    ac,
    location,
  }: {
    id: string;
    hp: number;
    ac: number;
    location: TypeRoom;
  }) {
    this.#id = id;
    this.#hp = hp;
    this.#maxHP = hp;
    this.#ac = ac;
    this.#location = location;
  }

  getID(): string {
    return this.#id;
  }

  abstract describe(): void;

  setLocation(location: TypeRoom) {
    this.#location = location;
  }

  getHP(): number {
    return this.#hp;
  }

  getAC(): number {
    return this.#ac;
  }

  takeDamage(damage: number): void {
    this.#hp -= damage;
  }

  getLocationId(): string {
    return this.#location.getID();
  }
}

export default AbstractMonster;
