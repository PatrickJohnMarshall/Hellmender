import PlayerAction from './player/PlayerAction';
import Bedroom from './rooms/Bedroom';
import PlayerLocation from './player/PlayerLocation';
import formatLog from './util/formatLog';

export default async function () {
  formatLog('You put on your robe and wizard hat.');
  const playerAction = new PlayerAction();
  const playerLocation = new PlayerLocation(new Bedroom());
  playerLocation.describe();
  const response = await playerAction.action('What now?');
  formatLog(`${response}`);
}
