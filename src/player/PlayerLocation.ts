import Room from "../tower-layout/types/Room";
class PlayerLocation {
  #location: Room;

  constructor(location: Room) {
    this.#location = location;
  }

  toSave(): string {
    return this.#location.getID();
  }

  getID(): string {
    return this.#location.getID();
  }

  update(location: Room) {
    this.#location = location;
  }

  describe(): string {
    return this.#location.description();
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
