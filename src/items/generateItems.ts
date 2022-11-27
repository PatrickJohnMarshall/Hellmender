import Fist from "./weapons/Fist";
import Wand from "./keyItems/Wand";
import ActiveItems from "./ActiveItems";
import ShortSword from "./weapons/ShortSword";

export default function generateItems() {
  const activeItems = new ActiveItems();

  const fist = new Fist();
  const wand = new Wand();
  const shortsword = new ShortSword();

  wand.setLocationID("bedroom");
  shortsword.setLocationID("bedroom");

  activeItems.addWeapons(fist);
  activeItems.addWeapons(shortsword);

  activeItems.addKeyItems(wand);
  return { activeItems: activeItems, defaultWeapon: fist };
}
