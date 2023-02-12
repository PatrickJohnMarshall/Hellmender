import PlayerInventory from "./PlayerInventory";
import Fist from "items/weapons/Fist";
import ShortSword from "items/weapons/ShortSword";
import FireBolt from "spells/spells/FireBolt";

describe("PlayerInventory", () => {
  test("adds a weapon", () => {
    const fist = new Fist();

    const playerInventory = new PlayerInventory({
      equippedWeapon: fist,
      invWeapons: [],
      invKeyItems: [],
      invSpells: [],
    });

    playerInventory.addWeapon(fist);

    const weaponResult = playerInventory.getWeapons();
    expect(weaponResult.length).toBe(2);
  });

  test("equips a weapon", () => {
    const fist = new Fist();
    const shortSword = new ShortSword();

    const playerInventory = new PlayerInventory({
      equippedWeapon: fist,
      invWeapons: [],
      invKeyItems: [],
      invSpells: [],
    });

    playerInventory.addWeapon(shortSword);

    playerInventory.equipWeapon(shortSword.getID());
    const equippedResult = playerInventory.getEquippedWeaponStats();

    expect(equippedResult.attackBonus).toBe(
      shortSword.getAttackStats().attackBonus
    );
  });

  test("learn a spell", () => {
    const fist = new Fist();
    const playerInventory = new PlayerInventory({
      equippedWeapon: fist,
      invWeapons: [],
      invKeyItems: [],
      invSpells: [],
    });

    const firebolt = new FireBolt();

    playerInventory.learnSpell(firebolt);

    expect(playerInventory.getSpells().length).toBe(1);
  });

  test("give stats of known spell", () => {
    const fist = new Fist();
    const playerInventory = new PlayerInventory({
      equippedWeapon: fist,
      invWeapons: [],
      invKeyItems: [],
      invSpells: [],
    });

    const firebolt = new FireBolt();

    playerInventory.learnSpell(firebolt);
    const spellStats = playerInventory.getKnownSpellStats(firebolt.getID());

    expect(spellStats.attackBonus).toBe(firebolt.getSpellStats().attackBonus);
  });
});
