type IPlayerAttack = {
  attack: (
    monsterName: string,
    validMonsterIDs: string[]
  ) => { id: string; attackValue: number; damageValue: string };
};

export default IPlayerAttack;
