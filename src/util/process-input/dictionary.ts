const verbDictionary = [
  "quit",

  "move",
  "go",
  "walk",
  "head",
  "travel",
  "run",

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
  below: "down",
  above: "up",
};

const commandSynonyms = {
  go: "move",
  walk: "move",
  head: "move",
  travel: "move",
  run: "move",
};

const directionAntonyms = {
  forward: "south",
  left: "right",
  right: "left",
  south: "forward",
  up: "down",
  down: "up",
};

const nounDictionary = ["grumpkin", "firebolt", "shortsword", "wand"];

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
  commandSynonyms,
  directionAntonyms,
};
