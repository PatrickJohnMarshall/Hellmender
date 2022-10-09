import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';

class ToiletArena extends AbstractRoom {
  constructor() {
    super('toiletarena');
  }

  description(): string {
    return formatLog([
      'We can be flavorful later - Boss fight against *The Great and Mighty Cube*.',
      'Up - Back to salvation',
    ]);
  }
}

export default ToiletArena;
