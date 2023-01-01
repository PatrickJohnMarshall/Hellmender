const imageMap = {
  grumpkin: `https://i.imgur.com/2Au0An7.png`,
  overseer: "https://i.imgur.com/dQHEoMX.png",
  skeleton: "https://i.imgur.com/HDH5JKw.png",
  imp: "https://i.imgur.com/y519faC.png",
};

export default function getImageForMonster(monsterID: string) {
  return imageMap[monsterID];
}
