import PlayerAction from './player/action/PlayerAction';
import PlayerLocation from './player/PlayerLocation';
import formatLog from './util/formatLog';
import buildLayout from './layout/buildLayout';

export default async function () {
  formatLog('You put on your robe and wizard hat.');
  const startingRoom = buildLayout();

  const playerLocation = new PlayerLocation(startingRoom);
  const playerAction = new PlayerAction(playerLocation);

  while (true) {
    playerLocation.describe();
    await playerAction.action('What now?');
  }
}
