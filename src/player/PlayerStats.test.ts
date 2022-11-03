import PlayerStats from "./PlayerStats";

const mockPlayerStats = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  mana: 10,
  hp: 10,
  ac: 10,
};

describe("PlayerStats", () => {
  test("sets attributes", () => {
    const playerStats = new PlayerStats(mockPlayerStats);

    expect(playerStats.getAttributes().str).toEqual(10);
  });

  test("can set new attribute value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);

    playerStats.setStr(8);

    expect(playerStats.getAttributes().str).toEqual(8);
  });

  test("can change attribute value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);

    playerStats.changeStr(-3);

    expect(playerStats.getAttributes().str).toEqual(7);
  });

  test("can change hp value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeHP(-5);

    expect(playerStats.getHP()).toEqual(5);
  });

  test("can change max hp value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeMaxHP(-1);
    playerStats.changeHP(-5);
    playerStats.changeMaxHP(-1);

    expect(playerStats.getHP()).toEqual(4);
    expect(playerStats.getMaxHP()).toEqual(8);
  });

  test("can change mana value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeMana(-5);

    expect(playerStats.getMana()).toEqual(5);
  });

  test("can change max mana value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeMaxMana(-1);
    playerStats.changeMana(-5);
    playerStats.changeMaxMana(-1);

    expect(playerStats.getMana()).toEqual(4);
    expect(playerStats.getMaxMana()).toEqual(8);
  });

  test("hp equalizes when max is lowered bellow current hp", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.setMaxHP(7);

    expect(playerStats.getHP()).toEqual(7);
    expect(playerStats.getMaxHP()).toEqual(7);
  });

  test("hp equalizes set above max hp", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.setHP(14);

    expect(playerStats.getHP()).toEqual(10);
    expect(playerStats.getMaxHP()).toEqual(10);
  });

  test("mana equalizes when max is lowered bellow current mana", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.setMaxMana(3);

    expect(playerStats.getMana()).toEqual(3);
    expect(playerStats.getMaxMana()).toEqual(3);
  });

  test("mana equalizes set above max mana", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.setMana(14);

    expect(playerStats.getMana()).toEqual(10);
    expect(playerStats.getMaxMana()).toEqual(10);
  });

  test("can change ac value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeAC(2);

    expect(playerStats.getAC()).toEqual(12);
  });
});
