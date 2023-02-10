import Weapons from "items/types/Weapon";
import KeyItems from "./types/KeyItems";
import Spell from "spells/types/Spell";

class ActiveItems {
  #activeWeapons: Weapons[] = [];
  #activeKeyItems: KeyItems[] = [];
  #activeSpells: Spell[] = [];

  addWeapons(weapon: Weapons) {
    this.#activeWeapons.push(weapon);
  }

  addKeyItems(keyItems: KeyItems) {
    this.#activeKeyItems.push(keyItems);
  }

  addSpells(spell: Spell) {
    this.#activeSpells.push(spell);
  }

  getWeapons() {
    return this.#activeWeapons;
  }

  getKeyItems() {
    return this.#activeKeyItems;
  }

  getSpells() {
    return this.#activeSpells;
  }

  getWeaponsForRoom(roomId: string) {
    return this.#activeWeapons.filter(
      (item) => item.getLocationID() === roomId
    );
  }

  getKeyItemsForRoom(roomId: string) {
    return this.#activeKeyItems.filter(
      (item) => item.getLocationID() === roomId
    );
  }
}

export default ActiveItems;
