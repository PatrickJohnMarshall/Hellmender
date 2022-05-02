import formatLog from '../util/formatLog';
import TypeRoom from './types/Room';
abstract class Room {
  abstract description(): void;

  left(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }

  right(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }

  forward(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }

  back(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }

  up(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }

  down(): TypeRoom {
    throw new Error('NO_CONNECTION');
  }
}

export default Room;
