type IPlayerCast = {
  attack: (spellID: string) => { attackValue: number; damageValue: string };
};

export default IPlayerCast;
