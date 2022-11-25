export default function getRoomItemDescriptions(location, items) {
  return items
    .getKeyItemsForRoom(location)
    .reduce(
      (finalDesc, keyItem) =>
        finalDesc + "\n" + keyItem.inLocationDescription(),
      ""
    );
}
