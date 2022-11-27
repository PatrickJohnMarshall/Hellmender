type Stats = {
  attackBonus: number;
  damage: { min: number; max: number };
};

abstract class AbstractWeapons {
  #id: string;
  #stats: Stats;
  #location: string | null;

  constructor({ id, stats }: { id: string; stats: Stats }) {
    this.#id = id;
    this.#stats = stats;
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

  getAttackStats(): Stats {
    return this.#stats;
  }

  abstract describe(): string;

  abstract inLocationDescription(): string;
}

export default AbstractWeapons;
