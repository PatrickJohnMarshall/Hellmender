import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class LibraryLanding extends AbstractRoom {
  constructor() {
    super('librarylanding');
  }

  description(): string {
    return formatLog(['We can be flavorful later - Books.']);
  }
}

export default LibraryLanding;
