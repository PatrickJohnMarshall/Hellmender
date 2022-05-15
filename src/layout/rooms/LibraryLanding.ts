import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class LibraryLanding extends AbstractRoom {
  description(): void {
    formatLog('We can be flavorful later - Books.');
  }
}

export default LibraryLanding;
