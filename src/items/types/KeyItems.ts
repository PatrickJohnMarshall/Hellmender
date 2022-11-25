interface KeyItems {
  getID: () => string;
  describe: () => string;
  setLocationID: (location: string) => void;
  getLocationID: () => string;
  removeLocationID: () => void;
  inLocationDescription: () => string;
}

export default KeyItems;
