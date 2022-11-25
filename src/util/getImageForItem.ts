// import {sword} from `../styles/img/icons/sword.png`

const imageMap = {
  fist: `https://i.imgur.com/hkA2Su1.png`,
  shortsword: `https://i.imgur.com/K9Hs3nm.jpg`,
};

export default function getImageForItem(itemID: string) {
  return imageMap[itemID];
}
