const imageMap = { firebolt: `https://i.imgur.com/pZUufjp.png` };

export default function getImageForMonster(itemID: string) {
  return imageMap[itemID];
}
