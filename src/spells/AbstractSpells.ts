type Stats = {
  attackBonus: number;
  damage: { min: number; max: number };
};

abstract class AbstractSpells {
  #id: string;
  #stats: Stats;

  constructor({ id, stats }: { id: string; stats: Stats }) {
    this.#id = id;
    this.#stats = stats;
  }

  getID(): string {
    return this.#id;
  }

  getSpellStats(): Stats {
    return this.#stats;
  }

  abstract describe(): string;
}

export default AbstractSpells;
