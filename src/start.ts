import PlayerAction from './player/action/PlayerAction';
import PlayerLocation from './player/PlayerLocation';
import formatLog from './util/formatLog';
import buildLayout from './tower-layout/buildLayout';
import generateMonsters from './monsters/generateMonsters';

export default async function () {
  formatLog('You put on your robe and wizard hat.');
  const startingRoom = buildLayout();

  const monsters = generateMonsters();

  const playerLocation = new PlayerLocation(startingRoom);
  const playerAction = new PlayerAction(playerLocation);

  while (true) {
    playerLocation.describe();
    describeAllMonstersAtLocation(
      monsters.getMonstersForRoom(playerLocation.getID())
    );
    await playerAction.action('What now?');
  }
}

function describeAllMonstersAtLocation(monsters: any[]) {
  monsters.forEach((monster) => {
    formatLog('---Danger---');
    monster.describe();
  });
}
