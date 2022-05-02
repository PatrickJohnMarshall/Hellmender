class PlayerLocation {
  #location: any;

  constructor(location: any) {
    this.#location = location;
  }

  update(location: any) {
    this.#location = location;
  }

  describe() {
    this.#location.description();
  }
}

export default PlayerLocation;
