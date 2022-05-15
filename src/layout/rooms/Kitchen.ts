import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class Kitchen extends AbstractRoom {
  description(): void {
    formatLog('We can be flavorful later - Food. Mess. Healing. Mimic Fridge.');
    formatLog('Back - Back to Study.');
  }
}

export default Kitchen;
