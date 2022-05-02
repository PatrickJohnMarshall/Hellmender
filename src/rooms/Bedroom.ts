import Room from './Room';
import formatLog from '../util/formatLog';

class Bedroom extends Room {
  constructor() {
    super();
  }

  description(): void {
    formatLog('You are at the apex of your grand wizard tower.');
    formatLog(
      'To your immediate right is a dastardly grumpkin, angry and looking to steal your hat.'
    );
    formatLog(
      "To your left is your nightstand, your wand jammed firmly in a loaf of bread you've have left overnight...slob."
    );
    formatLog(
      'In front of you is an open window across the bedroom, the morning sky beckoning you.'
    );
    formatLog('Behind you is a wall.');
  }
}

export default Bedroom;
