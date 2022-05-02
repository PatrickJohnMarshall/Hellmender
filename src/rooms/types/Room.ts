type Room = {
  description: () => void;
  left: () => Room;
  right: () => Room;
  forward: () => Room;
  back: () => Room;
  up: () => Room;
  down: () => Room;
};

export default Room;
