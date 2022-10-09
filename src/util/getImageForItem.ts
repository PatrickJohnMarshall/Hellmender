const imageMap = { fist: `https://i.imgur.com/hkA2Su1.png` };

export default function getImageForMonster(itemID: string) {
  return imageMap[itemID];
}
