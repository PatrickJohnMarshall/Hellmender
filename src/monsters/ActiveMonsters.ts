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
    const results = this.#activeMonsters.filter(
      (monster) => monster.getLocationId() === roomId
    );
    console.log(results);
    return results;
  }
}

export default ActiveMonsters;
