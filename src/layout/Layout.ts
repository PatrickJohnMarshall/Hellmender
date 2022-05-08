import TypeRoom from './rooms/types/Room';

type IRoomConstructor = {
  left: TypeRoom | undefined;
  right: TypeRoom | undefined;
  forward: TypeRoom | undefined;
  back: TypeRoom | undefined;
  up: TypeRoom | undefined;
  down: TypeRoom | undefined;
};

class Layout {
  #rooms: TypeRoom[];

  constructor(startingRoom: TypeRoom) {
    this.#rooms = [];
    this.#rooms.push(startingRoom);
  }

  addRoom(room: TypeRoom) {
    this.#rooms.push(room);
  }

  getStartingRoom() {
    return this.#rooms[0];
  }
}

export default Layout;
