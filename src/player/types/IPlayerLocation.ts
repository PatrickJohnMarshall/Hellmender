import Room from "../../tower-layout/types/Room";

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
