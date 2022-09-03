import Room from '../tower-layout/rooms/types/Room';
class PlayerLocation {
  #location: Room;

  constructor(location: Room) {
    this.#location = location;
  }

  getID(): string {
    return this.#location.getID();
  }

  update(location: Room) {
    this.#location = location;
  }

  describe() {
    this.#location.description();
  }

  left() {
    return this.#location.left();
  }

  right() {
    return this.#location.right();
  }

  forward() {
    return this.#location.forward();
  }

  back() {
    return this.#location.back();
  }

  up() {
    return this.#location.up();
  }

  down() {
    return this.#location.down();
  }
}

export default PlayerLocation;
