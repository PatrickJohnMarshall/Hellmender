import Monster from './types/Monster';
import TypeRoom from '../layout/rooms/types/Room';

abstract class AbstractMonster {
  #hp: number;
  #maxHP: number;
  #ac: number;
  #location: TypeRoom;

  constructor({
    hp,
    ac,
    location,
  }: {
    hp: number;
    ac: number;
    location: TypeRoom;
  }) {
    this.#hp = hp;
    this.#maxHP = hp;
    this.#ac = ac;
    this.#location = location;
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
}

export default AbstractMonster;
