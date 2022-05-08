import PlayerLocation from './PlayerLocation';

const mockRoom = {
  description: () => {},
  left: () => mockRoom,
  right: () => mockRoom,
  forward: () => mockRoom,
  back: () => mockRoom,
  up: () => mockRoom,
  down: () => mockRoom,
};

describe('PlayerLocation', () => {
  test('describes player location', () => {
    const mockDescribe = jest.fn(() => {});
    const mockRoomWithDescribe = { ...mockRoom, description: mockDescribe };

    const playerLocation = new PlayerLocation(mockRoomWithDescribe);

    playerLocation.describe();
    expect(mockDescribe).toHaveBeenCalled();
  });

  test('updates player location', () => {
    const mockDescribe = jest.fn(() => {});
    const mockNewRoom = { ...mockRoom, description: mockDescribe };

    const playerLocation = new PlayerLocation(mockRoom);
    playerLocation.describe();
    expect(mockDescribe).toHaveBeenCalledTimes(0);

    playerLocation.update(mockNewRoom);

    playerLocation.describe();
    expect(mockDescribe).toHaveBeenCalled();
  });

  test('returns room to left', () => {
    const leftRoom = { ...mockRoom };
    const room = { ...mockRoom, left: () => leftRoom };

    const playerLocation = new PlayerLocation(room);
    const leftResult = playerLocation.left();

    expect(leftResult).toBe(leftRoom);
  });

  test('returns room to right', () => {
    const rightRoom = { ...mockRoom };
    const room = { ...mockRoom, right: () => rightRoom };

    const playerLocation = new PlayerLocation(room);
    const rightResult = playerLocation.right();

    expect(rightResult).toBe(rightRoom);
  });

  test('returns room to up', () => {
    const upRoom = { ...mockRoom };
    const room = { ...mockRoom, up: () => upRoom };

    const playerLocation = new PlayerLocation(room);
    const upResult = playerLocation.up();

    expect(upResult).toBe(upRoom);
  });

  test('returns room to down', () => {
    const downRoom = { ...mockRoom };
    const room = { ...mockRoom, down: () => downRoom };

    const playerLocation = new PlayerLocation(room);
    const downResult = playerLocation.down();

    expect(downResult).toBe(downRoom);
  });

  test('returns room to forward', () => {
    const forwardRoom = { ...mockRoom };
    const room = { ...mockRoom, forward: () => forwardRoom };

    const playerLocation = new PlayerLocation(room);
    const forwardResult = playerLocation.forward();

    expect(forwardResult).toBe(forwardRoom);
  });

  test('returns room to back', () => {
    const backRoom = { ...mockRoom };
    const room = { ...mockRoom, back: () => backRoom };

    const playerLocation = new PlayerLocation(room);
    const backResult = playerLocation.back();

    expect(backResult).toBe(backRoom);
  });
});
