import PlayerAction from './player/action/PlayerAction';
import Bedroom from './rooms/Bedroom';
import PlayerLocation from './player/PlayerLocation';
import formatLog from './util/formatLog';

export default async function () {
  formatLog('You put on your robe and wizard hat.');
  const playerLocation = new PlayerLocation(new Bedroom());
  const playerAction = new PlayerAction(playerLocation);

  while (true) {
    playerLocation.describe();
    await playerAction.action('What now?');
  }
}
