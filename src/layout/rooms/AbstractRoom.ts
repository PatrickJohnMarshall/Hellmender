import TypeRoom from './types/Room';

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

  abstract description(): void;

  getID(): string {
    return this.#id;
  }

  left(): TypeRoom {
    if (this.#left) {
      return this.#left;
    }
    throw new Error('NO_CONNECTION');
  }

  right(): TypeRoom {
    if (this.#right) {
      return this.#right;
    }
    throw new Error('NO_CONNECTION');
  }

  forward(): TypeRoom {
    if (this.#forward) {
      return this.#forward;
    }
    throw new Error('NO_CONNECTION');
  }

  back(): TypeRoom {
    if (this.#back) {
      return this.#back;
    }
    throw new Error('NO_CONNECTION');
  }

  up(): TypeRoom {
    if (this.#up) {
      return this.#up;
    }
    throw new Error('NO_CONNECTION');
  }

  down(): TypeRoom {
    if (this.#down) {
      return this.#down;
    }
    throw new Error('NO_CONNECTION');
  }
}

export default AbstractRoom;
