import Bedroom from './rooms/Bedroom';
import OutsideWindow from './rooms/OutsideWindow';
import Study from './rooms/Study';
import Kitchen from './rooms/Kitchen';
import Bathroom from './rooms/Bathroom';
import ToiletArena from './rooms/ToiletArena';
import LibraryLanding from './rooms/LibraryLanding';

export default function buildLayout() {
  const bedroom = new Bedroom();
  const outsideWindow = new OutsideWindow();
  const study = new Study();
  const kitchen = new Kitchen();
  const bathroom = new Bathroom();
  const toiletArena = new ToiletArena();
  const libraryLanding = new LibraryLanding();

  bedroom.addConnections({ forward: outsideWindow, down: study });
  study.addConnections({
    up: bedroom,
    left: kitchen,
    right: bathroom,
    down: libraryLanding,
  });
  kitchen.addConnections({ back: study });
  bathroom.addConnections({ back: study, down: toiletArena });
  toiletArena.addConnections({ up: bathroom });
  libraryLanding.addConnections({ up: study });

  return bedroom;
}
