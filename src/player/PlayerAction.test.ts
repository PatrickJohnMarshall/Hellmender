import PlayerAction from "./PlayerAction";
import Weapon from "../items/types/Weapons";

const mockMonster = {
  getID: () => "grumpkin",
  getHP: () => 20,
  getAC: () => 0,
  getName: () => "Grumpkin",
  getLocationId: () => "",
  takeDamage: () => {},
  describe: () => "",
};

const mockRoom = {
  getID: () => "",
  addConnections: () => {},
  description: () => "",
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

const fakeLocation = {
  describe: () => "",
  update: () => {},
  getID: () => "",
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

const fakeInventory = {
  addWeapon: () => {},
  getWeapons: () => [] as Weapon[],
  equipWeapon: () => {},
  getEquippedWeaponStats: () => ({
    attackBonus: 1,
    damage: {
      min: 1,
      max: 8,
    },
  }),
};

describe("PlayerAction", () => {
  test("performs a move", async () => {
    const mockForward = jest.fn(() => mockRoom);
    const location = { ...fakeLocation, forward: mockForward };

    const playerAction = new PlayerAction(location, fakeInventory);
    await playerAction.action("move forward", []);
    expect(mockForward).toHaveBeenCalled();
  });

  test("performs an attack", async () => {
    const mockTakeDamage = jest.fn();
    const location = { ...fakeLocation };

    const playerAction = new PlayerAction(location, fakeInventory);
    await playerAction.action("attack grumpkin", [
      { ...mockMonster, takeDamage: mockTakeDamage },
    ]);
    expect(mockTakeDamage).toHaveBeenCalled();
  });
});
