import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class Study extends AbstractRoom {
  description(): void {
    formatLog(
      'We can be flavorful later - its a study. Books. Imp. It wants something.'
    );
    formatLog('Left - Kitchen.');
    formatLog('Right - Bathroom but with a twist.');
    formatLog('Up - Back to the bedroom.');
    formatLog('Down - Down to the Library.');
  }
}

export default Study;
