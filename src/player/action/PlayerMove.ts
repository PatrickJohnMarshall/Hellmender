class PlayerMove {
  #playerLocation;
  #direction;

  constructor(playerLocation: any, direction: string) {
    this.#playerLocation = playerLocation;
    this.#direction = direction;
  }

  move() {
    switch (this.#direction.toLowerCase()) {
      case 'left':
        this.#playerLocation.update(this.#playerLocation.left());
        break;
      case 'right':
        this.#playerLocation.update(this.#playerLocation.right());
        break;
      case 'forward':
        this.#playerLocation.update(this.#playerLocation.forward());
        break;
      case 'back':
        this.#playerLocation.update(this.#playerLocation.back());
        break;
      case 'up':
        this.#playerLocation.update(this.#playerLocation.up());
        break;
      case 'down':
        this.#playerLocation.update(this.#playerLocation.down());
        break;
      default:
        throw new Error('Invalid direction');
    }
  }
}

export default PlayerMove;
