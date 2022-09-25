import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class Study extends AbstractRoom {
  constructor() {
    super('study');
  }

  description(): string {
    return formatLog([
      'We can be flavorful later - its a study. Books. Imp. It wants something.',
      'Left - Kitchen.',
      'Right - Bathroom but with a twist.',
      'Up - Back to the bedroom.',
      'Down - Down to the Library.',
    ]);
  }
}

export default Study;
