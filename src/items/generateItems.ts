import Fist from "./weapons/Fist";
import Wand from "./keyItems/Wand";
import ShortSword from "./weapons/ShortSword";
import FireBolt from "spells/spells/FireBolt";

import ActiveItems from "./ActiveItems";

type ItemGenArgs = {
  inventoryItemIDs: string[];
  equippedWeaponID: string;
};

export default function generateItems(
  args: ItemGenArgs = {
    equippedWeaponID: "fist",
    inventoryItemIDs: ["fist"],
  }
) {
  const activeItems = new ActiveItems();

  const fist = new Fist();
  const shortsword = new ShortSword();

  const wand = new Wand();

  const firebolt = new FireBolt();

  const itemLocations = {
    wand: "bedroom",
    shortsword: "bedroom",
  };

  activeItems.addWeapons(fist);
  activeItems.addWeapons(shortsword);
  activeItems.addKeyItems(wand);
  activeItems.addSpells(firebolt);

  const activeWeaponsList = activeItems.getWeapons();
  const activeKeyItemsList = activeItems.getKeyItems();

  for (const item in activeWeaponsList) {
    const realWeaponID = activeWeaponsList[item].getID();

    if (itemLocations[realWeaponID] && !args.inventoryItemIDs[realWeaponID]) {
      activeWeaponsList[item].setLocationID(itemLocations[realWeaponID]);
    }
  }

  for (const item in activeKeyItemsList) {
    const realKeyItemID = activeKeyItemsList[item].getID();

    if (itemLocations[realKeyItemID] && !args.inventoryItemIDs[realKeyItemID]) {
      activeKeyItemsList[item].setLocationID(itemLocations[realKeyItemID]);
    }
  }

  function findEquippedWeapon(id: string) {
    for (const weapon in activeWeaponsList) {
      if (activeWeaponsList[weapon].getID() === id) {
        return activeWeaponsList[weapon];
      }
    }
  }

  return {
    activeItems: activeItems,
    equippedWeapon: findEquippedWeapon(args.equippedWeaponID),
  };
}
