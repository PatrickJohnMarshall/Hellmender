import Weapons from "items/types/Weapon";
import KeyItems from "./types/KeyItems";

class ActiveItems {
  #activeWeapons: Weapons[] = [];
  #activeKeyItems: KeyItems[] = [];

  addWeapons(weapon: Weapons) {
    this.#activeWeapons.push(weapon);
  }

  addKeyItems(keyItems: KeyItems) {
    this.#activeKeyItems.push(keyItems);
  }

  getWeapons() {
    return this.#activeWeapons;
  }

  getKeyItems() {
    return this.#activeKeyItems;
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
