import PlayerAction from './player/action/PlayerAction';
import PlayerLocation from './player/PlayerLocation';
import PlayerInventory from './player/PlayerInventory';
import formatLog from './util/formatLog';
import buildLayout from './tower-layout/buildLayout';
import generateMonsters from './monsters/generateMonsters';
import Fist from './items/weapons/Fist';

export default async function () {
  formatLog('You put on your robe and wizard hat.');
  const startingRoom = buildLayout();

  const monsters = generateMonsters();

  const fist = new Fist();

  const playerLocation = new PlayerLocation(startingRoom);
  const playerInventory = new PlayerInventory(fist);
  const playerAction = new PlayerAction(playerLocation, playerInventory);

  playerLocation.describe();

  while (true) {
    const monstersInRoom = monsters.getMonstersForRoom(playerLocation.getID());
    describeAllMonstersAtLocation(monstersInRoom);
    await playerAction.action('What now?', monstersInRoom);
  }
}

function describeAllMonstersAtLocation(monsters: any[]) {
  if (monsters.length) {
    const monstersInRoom = monsters.reduce((monsterList, monster, index) => {
      if (index !== monsters.length - 1) {
        return monsterList + monster.getName() + ', ';
      }
      return monsterList + monster.getName();
    }, '');
    formatLog('---Danger---');
    formatLog(`Monsters in room: ${monstersInRoom} `);
  }
}
