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
  left: () => TypeRoom | string;
  right: () => TypeRoom | string;
  forward: () => TypeRoom | string;
  back: () => TypeRoom | string;
  up: () => TypeRoom | string;
  down: () => TypeRoom | string;
}

export default TypeRoom;
