import Fist from "./weapons/Fist";
import Wand from "./keyItems/Wand";
import ActiveItems from "./ActiveItems";

export default function generateItems() {
  const activeItems = new ActiveItems();

  const fist = new Fist();
  const wand = new Wand();

  wand.setLocationID("bedroom");

  activeItems.addWeapons(fist);
  activeItems.addKeyItems(wand);
  return { activeItems: activeItems, defaultWeapon: fist };
}
