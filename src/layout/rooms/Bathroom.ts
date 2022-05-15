import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class Bathroom extends AbstractRoom {
  description(): void {
    formatLog(
      'We can be flavorful later - Bathroom. Crampt. Gaudy. Gelatinous cube wants to eat you from the giant golden toilet.'
    );
    formatLog('Down - Down the toilet.');
    formatLog('Back - Back to the study.');
  }
}

export default Bathroom;
