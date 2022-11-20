abstract class AbstractKeyItems {
  #id: string;
  #location: string | undefined;

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

  abstract describe(): string;

  abstract inLocationDescription(): string;
}

export default AbstractKeyItems;
