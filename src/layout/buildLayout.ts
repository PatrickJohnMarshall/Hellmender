import Layout from './Layout';
import Bedroom from './rooms/Bedroom';
import OutsideWindow from './rooms/OutsideWindow';
import SecondFloorLanding from './rooms/SecondFloorLanding';

export default function () {
  const bedroom = new Bedroom();
  const outsideWindow = new OutsideWindow();
  const secondFloorLanding = new SecondFloorLanding();

  bedroom.addConnections({ forward: outsideWindow, down: secondFloorLanding });
  secondFloorLanding.addConnections({ up: bedroom });

  const layout = new Layout(bedroom);
  layout.addRoom(secondFloorLanding);
  layout.addRoom(outsideWindow);

  return layout;
}
