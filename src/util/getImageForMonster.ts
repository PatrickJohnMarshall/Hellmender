const imageMap = { grumpkin: `https://i.imgur.com/DR5U0Zd.png` };

export default function getImageForMonster(monsterID: string) {
  return imageMap[monsterID];
}
