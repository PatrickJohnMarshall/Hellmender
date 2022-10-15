import PlayerStats from "./PlayerStats";

const mockPlayerStats = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
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

    playerStats.setAttribute("str", 8);

    expect(playerStats.getAttributes().str).toEqual(8);
  });

  test("can change attribute value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);

    playerStats.changeAttribute("str", -3);

    expect(playerStats.getAttributes().str).toEqual(7);
  });

  test("can change hp value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeHP(-5);

    expect(playerStats.getHP()).toEqual(5);
  });

  test("can change ac value", () => {
    const playerStats = new PlayerStats(mockPlayerStats);
    playerStats.changeAC(2);

    expect(playerStats.getAC()).toEqual(12);
  });
});
