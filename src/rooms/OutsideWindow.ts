import Room from './Room';
import formatLog from '../util/formatLog';

class Bedroom extends Room {
  constructor() {
    super();
  }

  description(): void {
    formatLog('Wizard falls, you die.');
  }
}

export default Bedroom;
