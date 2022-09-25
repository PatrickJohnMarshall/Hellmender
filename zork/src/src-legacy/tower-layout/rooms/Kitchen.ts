import AbstractRoom from './AbstractRoom';
import formatLog from '../../util/formatLog';
class Kitchen extends AbstractRoom {
  constructor() {
    super('kitchen');
  }

  description(): string {
    return formatLog([
      'We can be flavorful later - Food. Mess. Healing. Mimic Fridge.',
      'Back - Back to Study.',
    ]);
  }
}

export default Kitchen;
