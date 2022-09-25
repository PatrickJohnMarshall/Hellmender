import Grumpkin from './creatures/Grumpkin';
import buildLayout from '../tower-layout/buildLayout';
import ActiveMonsters from './ActiveMonsters';

export default function generateMonsters() {
  const activeMonsters = new ActiveMonsters();
  const startingRoom = buildLayout();

  const grumpkin = new Grumpkin({
    id: 'grumpkin',
    hp: 15,
    ac: 13,
    name: 'Grumpkin',
    location: startingRoom,
  });

  activeMonsters.addMonster(grumpkin);
  return activeMonsters;
}
