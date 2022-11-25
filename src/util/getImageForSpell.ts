const imageMap = { firebolt: `https://i.imgur.com/pZUufjp.png` };

export default function getImageForSpell(itemID: string) {
  return imageMap[itemID];
}
