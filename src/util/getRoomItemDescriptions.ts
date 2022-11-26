export default function getRoomItemDescriptions(location, items) {
  if (location === undefined || location === null) {
    return "";
  }

  const allItems = [
    ...items.getKeyItemsForRoom(location),
    ...items.getWeaponsForRoom(location),
  ];

  const returnItem = allItems.reduce(
    (finalDesc, item) => finalDesc + "\n" + item.inLocationDescription(),
    ""
  );

  return returnItem;
}
