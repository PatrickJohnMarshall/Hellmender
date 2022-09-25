import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';
class Bedroom extends AbstractRoom {
  constructor() {
    super('bedroom');
  }

  description(): string {
    return formatLog([
      `You are at the apex of your grand wizard tower.`,
      `To your immediate right is a dastardly grumpkin, angry and looking to steal your hat.`,
      `To your left is a nightstand, your wand jammed firmly in a loaf of bread you've left overnight...slob.`,
      `In front of you is an open window across the bedroom, the morning sky beckoning you.`,
      `Centered in the middle of the room and the tower itself is a spiral staircase leading ever downward.`,
      `Behind you is a wall.`,
    ]);
  }
}

export default Bedroom;
