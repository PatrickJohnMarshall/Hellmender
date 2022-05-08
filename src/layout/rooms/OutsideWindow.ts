import Room from './Room';
import formatLog from '../../util/formatLog';

class OutsideWindow extends Room {
  description(): void {
    formatLog('Wizard falls, you die.');
  }
}

export default OutsideWindow;
