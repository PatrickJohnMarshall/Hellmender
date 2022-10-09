import Room from "../../src-legacy/tower-layout/rooms/types/Room";

type IPlayerLocation = {
  update: (location: Room) => void;
  getID: () => string;
  describe: () => string;
  left: () => Room;
  right: () => Room;
  forward: () => Room;
  back: () => Room;
  up: () => Room;
  down: () => Room;
};

export default IPlayerLocation;
