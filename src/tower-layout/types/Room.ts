type IRoomConstructor = {
  left?: TypeRoom | undefined;
  right?: TypeRoom | undefined;
  forward?: TypeRoom | undefined;
  back?: TypeRoom | undefined;
  up?: TypeRoom | undefined;
  down?: TypeRoom | undefined;
};
interface TypeRoom {
  getID: () => string;
  addConnections: (connections: IRoomConstructor) => void;
  description: () => string;
  left: () => TypeRoom;
  right: () => TypeRoom;
  forward: () => TypeRoom;
  back: () => TypeRoom;
  up: () => TypeRoom;
  down: () => TypeRoom;
}

export default TypeRoom;
