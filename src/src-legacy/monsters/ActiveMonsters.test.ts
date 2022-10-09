import ActiveMonsters from "./ActiveMonsters";
import TypeMonster from "./types/Monster";

const mockMonster: TypeMonster = {
  getID: () => "",
  getHP: () => 69,
  getAC: () => 420,
  getName: () => "",
  getLocationId: () => "",
  takeDamage: (damage: number) => {},
  describe: () => "",
};

describe("ActiveMonsters", () => {
  test("adds a monster", () => {
    const mockBumpkin = {
      ...mockMonster,
      getID: () => "bumpkin",
    };
    const activeMonsters = new ActiveMonsters();

    activeMonsters.addMonster(mockBumpkin);
    expect(
      activeMonsters
        .getMonsters()
        .findIndex((monster) => monster.getID() === "bumpkin") !== -1
    ).toBeTruthy();
  });

  test("gets monster for room", () => {
    const mockMonsterInBedroom = {
      ...mockMonster,
      getLocationId: () => "bedroom",
      getID: () => "bumpkin",
    };

    const activeMonsters = new ActiveMonsters();
    activeMonsters.addMonster(mockMonsterInBedroom);

    expect(
      activeMonsters
        .getMonstersForRoom("bedroom")
        .findIndex((monster) => monster.getID() === "bumpkin") !== -1
    ).toBeTruthy();
  });
});
