import IPlayerLocation from "../types/IPlayerLocation";

class PlayerMove {
  #playerLocation;
  #direction;

  constructor(playerLocation: IPlayerLocation, direction: string) {
    this.#playerLocation = playerLocation;
    this.#direction = direction;
  }

  move() {
    if (
      this.#direction === "left" &&
      this.#playerLocation.left() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }
    if (
      this.#direction === "right" &&
      this.#playerLocation.right() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }
    if (
      this.#direction === "forward" &&
      this.#playerLocation.forward() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }
    if (
      this.#direction === "back" &&
      this.#playerLocation.back() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }
    if (
      this.#direction === "up" &&
      this.#playerLocation.up() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }
    if (
      this.#direction === "down" &&
      this.#playerLocation.down() === "NO_CONNECTION"
    ) {
      return "NO_CONNECTION";
    }

    this._doMove();
  }

  _doMove() {
    switch (this.#direction.toLowerCase()) {
      case "left":
        this.#playerLocation.update(this.#playerLocation.left());
        break;
      case "right":
        this.#playerLocation.update(this.#playerLocation.right());
        break;
      case "forward":
        this.#playerLocation.update(this.#playerLocation.forward());
        break;
      case "back":
        this.#playerLocation.update(this.#playerLocation.back());
        break;
      case "up":
        this.#playerLocation.update(this.#playerLocation.up());
        break;
      case "down":
        this.#playerLocation.update(this.#playerLocation.down());
        break;
      default:
        throw new Error("Invalid direction");
    }
  }
}

export default PlayerMove;
