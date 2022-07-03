import Monster from './types/Monster';

function monsterDamage(monster: Monster, attack: number, damage: number) {
  if (attack >= monster.getAC()) {
    monster.takeDamage(damage);
    console.log(monster.getHP());
  }
}

export default monsterDamage;
