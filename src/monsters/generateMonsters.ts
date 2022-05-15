import Grumpkin from './Grumpkin';
import buildLayout from '../layout/buildLayout';

export default function generateMonsters() {
  const startingRoom = buildLayout();
  const grumpkin = new Grumpkin({ hp: 15, ac: 13, location: startingRoom });

  return grumpkin;
}
