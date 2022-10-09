import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class Bathroom extends AbstractRoom {
  constructor() {
    super('bathroom');
  }

  description(): string {
    return formatLog([
      'We can be flavorful later - Bathroom. Crampt. Gaudy. Gelatinous cube wants to eat you from the giant golden toilet.',
      'Down - Down the toilet.',
      'Back - Back to the study.',
    ]);
  }
}

export default Bathroom;
