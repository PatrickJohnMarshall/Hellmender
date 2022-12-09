const verbDictionary = [
  "quit",
  "move",
  "attack",
  "look",
  "cast",
  "take",
  "equip",
];

const directionDictionary = [
  "forward",
  "north",
  "back",
  "south",
  "left",
  "west",
  "right",
  "east",
  "up",
  "above",
  "down",
  "below",
];

const directionSynonyms = {
  north: "forward",
  west: "left",
  east: "right",
};

const directionAntonyms = {
  forward: "south",
  left: "right",
  right: "left",
  south: "forward",
  up: "down",
  down: "up",
};

const nounDictionary = ["grumpkin", "firebolt", "shortsword"];

const prepositionDictionary = [
  "at",
  "about",
  "above",
  "around",
  "against",
  "behind",
  "between",
  "by",
  "in",
  "inside",
  "into",
  "near",
  "on",
  "of",
  "off",
  "onto",
  "opposite",
  "outside",
  "over",
  "past",
  "save",
  "to",
  "towards",
  "towards",
  "under",
  "underneath",
  "until",
  "up",
  "upon",
  "via",
  "with",
  "within",
  "without",
];

export {
  verbDictionary,
  directionDictionary,
  nounDictionary,
  prepositionDictionary,
  directionSynonyms,
  directionAntonyms,
};
