import TypeRoom from "../types/Room";

type IRoomConstructor = {
  left?: TypeRoom | undefined;
  right?: TypeRoom | undefined;
  forward?: TypeRoom | undefined;
  back?: TypeRoom | undefined;
  up?: TypeRoom | undefined;
  down?: TypeRoom | undefined;
};

abstract class AbstractRoom {
  #id: string;
  #left: TypeRoom | undefined;
  #right: TypeRoom | undefined;
  #forward: TypeRoom | undefined;
  #back: TypeRoom | undefined;
  #up: TypeRoom | undefined;
  #down: TypeRoom | undefined;

  constructor(id: string) {
    this.#id = id;
  }

  addConnections({ left, right, forward, back, up, down }: IRoomConstructor) {
    this.#left = left;
    this.#right = right;
    this.#forward = forward;
    this.#back = back;
    this.#up = up;
    this.#down = down;
  }

  abstract description(): string;

  getID(): string {
    return this.#id;
  }

  left(): TypeRoom | string {
    if (this.#left) {
      return this.#left;
    }
    return "NO_CONNECTION";
  }

  right(): TypeRoom | string {
    if (this.#right) {
      return this.#right;
    }
    return "NO_CONNECTION";
  }

  forward(): TypeRoom | string {
    if (this.#forward) {
      return this.#forward;
    }
    return "NO_CONNECTION";
  }

  back(): TypeRoom | string {
    if (this.#back) {
      return this.#back;
    }
    return "NO_CONNECTION";
  }

  up(): TypeRoom | string {
    if (this.#up) {
      return this.#up;
    }
    return "NO_CONNECTION";
  }

  down(): TypeRoom | string {
    if (this.#down) {
      return this.#down;
    }
    return "NO_CONNECTION";
  }
}

export default AbstractRoom;
