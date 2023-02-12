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
    mockState.saveState(0);
    mockState.playerStats.setStr(15);
    mockState.loadSave(0);

    expect(mockState.playerStats.getAttributes().str).toBe(25);
  });

  test("saves player location", () => {
    const mockState = new GameState(localStorageMock);

    const downRoom = mockState.playerLocation.down().getID();
    mockState.playerLocation.update(mockState.playerLocation.down());
    mockState.saveState(0);
    mockState.playerLocation.update(mockState.playerLocation.right());
    mockState.loadSave(0);

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

    mockState.saveState(0);
    mockState.loadSave(0);

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

    mockState.saveState(0);

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

    mockState.loadSave(0);

    expect(mockState.playerInventory.getWeapons()[1].getID()).toBe("fist");
    expect(mockState.playerInventory.getEquippedWeaponID()).toBe("shortsword");
    expect(mockState.playerInventory.getKeyItems()[0].getID()).toBe("wand");
    expect(mockState.playerInventory.getSpells()[0].getID()).toBe("firebolt");
  });

  test("saves multiple slots", () => {
    const mockState = new GameState(localStorageMock);

    mockState.playerStats.setStr(25);
    mockState.saveState(0);

    mockState.playerStats.setStr(15);
    mockState.loadSave(0);

    mockState.playerStats.setStr(10);
    mockState.saveState(1);

    mockState.playerStats.setStr(30);
    mockState.loadSave(1);

    expect(mockState.saveSlots[0].playerStats.str).toBe(25);
    expect(mockState.saveSlots[1].playerStats.str).toBe(10);
  });

  test("all states can be saved", () => {
    const mockState = new GameState(localStorageMock);

    const properties = Object.getOwnPropertyNames(mockState).splice(2, 4);

    properties.forEach((prop) => {
      expect(mockState[prop]?.toSave).toBeTruthy();
    });
  });
});
