import Bedroom from "./rooms/Bedroom";
import OutsideWindow from "./rooms/OutsideWindow";
import Study from "./rooms/Study";
import Kitchen from "./rooms/Kitchen";
import Bathroom from "./rooms/Bathroom";
import ToiletArena from "./rooms/ToiletArena";
import LibraryLanding from "./rooms/LibraryLanding";
import TypeRoom from "./types/Room";

export default function buildLayout(id: string = "bedroom") {
  const bedroom = new Bedroom();
  const outsideWindow = new OutsideWindow();
  const study = new Study();
  const kitchen = new Kitchen();
  const bathroom = new Bathroom();
  const toiletArena = new ToiletArena();
  const libraryLanding = new LibraryLanding();

  const rooms: TypeRoom[] = [
    bedroom,
    outsideWindow,
    study,
    kitchen,
    bathroom,
    toiletArena,
    libraryLanding,
  ];

  bedroom.addConnections({ forward: outsideWindow, down: study });
  study.addConnections({
    up: bedroom,
    left: kitchen,
    right: bathroom,
    down: libraryLanding,
  });
  kitchen.addConnections({ right: study });
  bathroom.addConnections({ left: study, down: toiletArena });
  toiletArena.addConnections({ up: bathroom });
  libraryLanding.addConnections({ up: study });

  for (const room in rooms) {
    if (rooms[room].getID() === id) {
      return rooms[room];
    }
  }

  throw new Error("Invalid Room ID");
}
