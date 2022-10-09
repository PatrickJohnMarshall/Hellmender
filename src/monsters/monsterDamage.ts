import Monster from "../monsters/types/Monster";

function monsterDamage(monster: Monster, attack: number, damage: number) {
  if (attack >= monster.getAC()) {
    monster.takeDamage(damage);
    return true;
  }
  return false;
}

export default monsterDamage;
