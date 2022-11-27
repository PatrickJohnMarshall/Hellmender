abstract class AbstractKeyItems {
  #id: string;
  #location: string | null;

  constructor({ id }: { id: string }) {
    this.#id = id;
  }

  getID(): string {
    return this.#id;
  }

  setLocationID(locationID: string) {
    this.#location = locationID;
  }

  getLocationID() {
    return this.#location;
  }

  removeLocationID() {
    this.#location = null;
  }

  abstract describe(): string;

  abstract inLocationDescription(): string;
}

export default AbstractKeyItems;
