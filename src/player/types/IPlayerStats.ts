type IPlayerStats = {
  setAttribute: (attribute: string, attriValue: number) => void;
  setHP: (hp: number) => void;
  setAC: (ac: number) => void;
  getAttributes: () => any;
  getHP: () => number;
  getAC: () => number;
  changeAttribute: (attribute: string, attriValue: number) => void;
  changeHP: (changeValue: number) => void;
  changeAC: (changeValue: number) => void;
};

export default IPlayerStats;
