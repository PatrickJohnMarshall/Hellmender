import inquirer from 'inquirer';
import PlayerAction from './PlayerAction';

jest.mock('inquirer');

const mockRoom = {
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

describe('PlayerAction', () => {
  test('performs an action', async () => {
    jest
      .spyOn(inquirer, 'prompt')
      .mockResolvedValue({ action: 'move forward' });

    const mockForward = jest.fn(() => mockRoom);
    const location = { ...fakeLocation, forward: mockForward };

    const playerAction = new PlayerAction(location);
    await playerAction.action('');
    expect(mockForward).toHaveBeenCalled();
  });
});
