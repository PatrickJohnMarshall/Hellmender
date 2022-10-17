type IPlayerCast = {
  attack: (
    spellID: string,
    monsterName: string,
    validMonsterIDs: string[]
  ) => { id: string; attackValue: number; damageValue: string };
};

export default IPlayerCast;
