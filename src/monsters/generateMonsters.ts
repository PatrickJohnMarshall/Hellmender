import Grumpkin from './creatures/Grumpkin';
import buildLayout from '../tower-layout/buildLayout';

export default function generateMonsters() {
  const startingRoom = buildLayout();
  const grumpkin = new Grumpkin({
    id: 'grumpkin',
    hp: 15,
    ac: 13,
    location: startingRoom,
  });

  return grumpkin;
}
