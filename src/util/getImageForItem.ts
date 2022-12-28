const positionMap = {
  fist: `-752px -251px`,
  shortsword: `-349px -254px`,
  wand: `-452px -302px`,
  blank: `-752px 0px`,
};

export default function getImageForItem(itemID: string) {
  return positionMap[itemID];
}
