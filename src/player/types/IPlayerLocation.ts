import Room from "../../tower-layout/types/Room";

type IPlayerLocation = {
  update: (location: Room | string) => string | void;
  getID: () => string;
  describe: () => string;
  left: () => Room | string;
  right: () => Room | string;
  forward: () => Room | string;
  back: () => Room | string;
  up: () => Room | string;
  down: () => Room | string;
};

export default IPlayerLocation;
