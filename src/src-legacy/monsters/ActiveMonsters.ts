import TypeMonster from './types/Monster';
import TypeRoom from '../tower-layout/rooms/types/Room';

class ActiveMonsters {
  #activeMonsters: TypeMonster[] = [];

  addMonster(monster: TypeMonster) {
    this.#activeMonsters.push(monster);
  }

  getMonsters() {
    return this.#activeMonsters;
  }

  getMonstersForRoom(roomId: string) {
    return this.#activeMonsters.filter(
      (monster) => monster.getLocationId() === roomId
    );
  }
}

export default ActiveMonsters;
