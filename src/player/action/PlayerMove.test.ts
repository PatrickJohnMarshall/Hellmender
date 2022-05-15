import PlayerMove from './PlayerMove';

const mockRoom = {
  addConnections: () => {},
  description: () => {},
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

const fakeLocation = {
  describe: () => {},
  update: () => {},
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

describe('PlayerMove', () => {
  test('moves the player', () => {
    const mockUpdate = jest.fn(() => {});
    const playerLocation = { ...fakeLocation, update: mockUpdate };

    const playerMove = new PlayerMove(playerLocation, 'left');
    playerMove.move();
    expect(mockUpdate).toHaveBeenCalled();
  });
});
