import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class OutsideWindow extends AbstractRoom {
  description(): void {
    formatLog('Wizard falls, you die.');
  }
}

export default OutsideWindow;
