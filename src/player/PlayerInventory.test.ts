import PlayerInventory from './PlayerInventory';

const mockItem = {
  getID: () => 'Vorpal Fist',
  attackStats: () => ({
    attackBonus: 0,
    damage: { min: 1, max: 5 },
  }),
  describe: () => '',
};

describe('PlayerInventory', () => {
  test('adds a weapon', () => {
    const playerInventory = new PlayerInventory();

    playerInventory.addWeapon(mockItem);

    const weaponResult = playerInventory.getWeapons();
    expect(weaponResult.length).toBe(1);
  });
});
