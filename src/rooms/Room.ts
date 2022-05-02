class Room {
  constructor() {
    if (new.target === Room) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  description(): void {
    throw new Error('Cannot describe abstract class');
  }
}

export default Room;
