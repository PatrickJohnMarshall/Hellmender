import Monster from "../monsters/types/Monster";

function monsterDamage(monster: Monster, attack: number, damage: number) {
  if (monster.getHP() <= 0) {
    return "Already Dead";
  }

  if (attack >= monster.getAC()) {
    monster.takeDamage(damage);
    return "Struck";
  }
  return "Missed";
}

export default monsterDamage;
