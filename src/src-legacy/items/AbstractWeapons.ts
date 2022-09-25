type Stats = {
  attackBonus: number;
  damage: { min: number; max: number };
};

abstract class AbstractWeapons {
  #id: string;
  #stats: Stats;

  constructor({ id, stats }: { id: string; stats: Stats }) {
    this.#id = id;
    this.#stats = stats;
  }

  getID(): string {
    return this.#id;
  }

  getAttackStats(): Stats {
    return this.#stats;
  }

  abstract describe(): void;
}

export default AbstractWeapons;
