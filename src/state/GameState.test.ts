import { GameState } from "./GameState";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },

    length: 0,
    key: () => "",
  };
})();

describe("GameState", () => {
  afterEach(() => {
    localStorageMock.clear();
  });

  test("saves player stats", () => {
    const mockState = new GameState(localStorageMock);

    mockState.playerStats.setStr(25);
    mockState.saveState();
    mockState.playerStats.setStr(15);
    mockState.loadSave();

    expect(mockState.playerStats.getAttributes().str).toBe(25);
  });

  test("saves player location", () => {
    const mockState = new GameState(localStorageMock);

    const downRoom = mockState.playerLocation.down().getID();
    mockState.playerLocation.update(mockState.playerLocation.down());
    mockState.saveState();
    mockState.playerLocation.update(mockState.playerLocation.right());
    mockState.loadSave();

    expect(mockState.playerLocation.getID()).toBe(downRoom);
  });

  test("saves previous command", () => {
    const mockState = new GameState(localStorageMock);

    mockState.playerAction._doAction({
      inputs: {
        command: ["move"],
        direction: ["down"],
      },
      validMonsters: {},
      keyItems: {},
      weapons: {},
    });

    mockState.saveState();
    mockState.loadSave();

    expect(mockState.playerAction.toSave()).toBe("down");
  });

  test("saves player inventory", () => {
    const mockState = new GameState(localStorageMock);

    mockState.playerAction._doAction({
      inputs: {
        command: ["take"],
        nouns: ["shortsword"],
        words: ["take", "shortsword"],
      },
      validMonsters: {},
      keyItems: {},
      weapons: mockState.items.activeItems.getWeapons(),
    });

    mockState.playerAction._doAction({
      inputs: {
        command: ["equip"],
        nouns: ["shortsword"],
        words: ["equip", "shortsword"],
      },
      validMonsters: {},
      keyItems: {},
      weapons: mockState.items.activeItems.getWeapons(),
    });

    mockState.playerAction._doAction({
      inputs: {
        command: ["take"],
        nouns: ["wand"],
        words: ["take", "wand"],
      },
      validMonsters: {},
      keyItems: mockState.items.activeItems.getKeyItems(),
      weapons: {},
    });

    mockState.saveState();

    mockState.playerAction._doAction({
      inputs: {
        command: ["equip"],
        nouns: ["fist"],
        words: ["equip", "fist"],
      },
      validMonsters: {},
      keyItems: {},
      weapons: mockState.items.activeItems.getWeapons(),
    });

    mockState.loadSave();

    expect(mockState.playerInventory.getWeapons()[1].getID()).toBe("fist");
    expect(mockState.playerInventory.getEquippedWeaponID()).toBe("shortsword");
    expect(mockState.playerInventory.getKeyItems()[0].getID()).toBe("wand");
    expect(mockState.playerInventory.getSpells()[0].getID()).toBe("firebolt");
  });

  test("all states can be saved", () => {
    const mockState = new GameState(localStorageMock);

    const properties = Object.getOwnPropertyNames(mockState).splice(2, 4);

    properties.forEach((prop) => {
      expect(mockState[prop]?.toSave).toBeTruthy();
    });
  });
});
