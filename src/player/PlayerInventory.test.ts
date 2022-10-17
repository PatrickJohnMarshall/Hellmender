import PlayerInventory from "./PlayerInventory";

const mockSpell = {
  getID: () => "fireBall",
  getSpellStats: () => ({
    attackBonus: 0,
    damage: { min: 6, max: 36 },
  }),
  describe: () => "",
};

const defaultWeapon = {
  getID: () => "doomFist",
  getAttackStats: () => ({
    attackBonus: 2,
    damage: { min: 1, max: 12 },
  }),
  describe: () => "",
};

const mockWeapon = {
  getID: () => "vorpalFist",
  getAttackStats: () => ({
    attackBonus: 0,
    damage: { min: 1, max: 5 },
  }),
  describe: () => "",
};

describe("PlayerInventory", () => {
  test("adds a weapon", () => {
    const playerInventory = new PlayerInventory(defaultWeapon);

    playerInventory.addWeapon(mockWeapon);

    const weaponResult = playerInventory.getWeapons();
    expect(weaponResult.length).toBe(2);
  });

  test("equips a weapon", () => {
    const playerInventory = new PlayerInventory(defaultWeapon);

    playerInventory.addWeapon(mockWeapon);

    playerInventory.equipWeapon("vorpalFist");
    const equippedResult = playerInventory.getEquippedWeaponStats();

    expect(equippedResult.attackBonus).toBe(
      mockWeapon.getAttackStats().attackBonus
    );
  });

  test("learn a spell", () => {
    const playerInventory = new PlayerInventory(defaultWeapon);

    playerInventory.learnSpell(mockSpell);

    expect(playerInventory.getSpells().length).toBe(1);
  });

  test("give stats of known spell", () => {
    const playerInventory = new PlayerInventory(defaultWeapon);

    playerInventory.learnSpell(mockSpell);
    const spellStats = playerInventory.getKnownSpellStats("fireBall");

    expect(spellStats.attackBonus).toBe(mockSpell.getSpellStats().attackBonus);
  });
});
