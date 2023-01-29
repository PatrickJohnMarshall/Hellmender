import parseText from "util/process-input/parseText";

import PlayerMove from "./action/PlayerMove";
import PlayerAttack from "./action/PlayerAttack";
import PlayerCast from "./action/PlayerCast";

import Monster from "../monsters/types/Monster";
import monsterDamage from "../monsters/monsterDamage";

import KeyItems from "items/types/KeyItems";
import Weapon from "items/types/Weapon";

import IPlayerLocation from "./types/IPlayerLocation";
import IPlayerInventory from "./types/IPlayerInventory";
import IPlayerStats from "./types/IPlayerStats";
import {
  EventType,
  AttackHit,
  AttackKill,
  AttackMiss,
  AttackAlreadyDead,
  SpellHit,
  SpellKill,
  SpellMiss,
  SpellAlreadyDead,
  LocationDescription,
  AddedToInventory,
  MiscStatus,
} from "./types/ActionEventTypes";

type ActionReturn = {
  event: EventType;
  eventData:
    | AttackHit
    | AttackKill
    | AttackMiss
    | AttackAlreadyDead
    | SpellHit
    | SpellKill
    | SpellMiss
    | SpellAlreadyDead
    | LocationDescription
    | AddedToInventory
    | MiscStatus
    | null;
};

type DoActionImputs = {
  inputs: {
    words?: string[] | null;
    direction?: string[] | null;
    nouns?: string[] | null;
    command?: string[] | null;
    prepositions?: string[] | null;
    subject?: string[] | null;
    findAntonym?: (string) => string[];
  };
  validMonsters: Monster[];
  keyItems: KeyItems[];
  weapons: Weapon[];
};

class PlayerAction {
  #previousMoveCommand;

  constructor(
    private playerLocation: IPlayerLocation,
    private playerInventory: IPlayerInventory,
    private playerStats: IPlayerStats
  ) {}

  action({
    input,
    validMonsters,
    keyItems,
    weapons,
  }: {
    input: string;
    validMonsters: Monster[];
    keyItems: KeyItems[];
    weapons: Weapon[];
  }): ActionReturn {
    const parsedInput = parseText(input);

    if (parsedInput.command[0] === "INVALID") {
      return { event: "INVALID", eventData: { status: "INVALID_COMMAND" } };
    }

    return this._doAction({
      inputs: parsedInput,
      validMonsters,
      keyItems,
      weapons,
    });
  }

  _validateCommand(command: string): boolean {
    const validCommands = [
      "quit",
      "move",
      "attack",
      "look",
      "cast",
      "take",
      "equip",
    ];

    return !!validCommands.find((c) => c === command);
  }

  _doAction({
    inputs,
    validMonsters,
    keyItems,
    weapons,
  }: DoActionImputs): ActionReturn {
    switch (inputs.command[0]) {
      case "look":
        return {
          event: "LOOK",
          eventData: {
            location: this.playerLocation.getID(),
            description: this.playerLocation.describe(),
          },
        };

      case "move":
        // secondaryCommand is a direction

        if (inputs.direction[0] === "back") {
          if (!this.#previousMoveCommand) {
            return {
              event: "INVALID",
              eventData: { status: "INVALID_MOVEMENT_NOBACK" },
            };
          }

          const backDirection = inputs.findAntonym(
            this.#previousMoveCommand
          )[0];

          const playerMove = new PlayerMove(this.playerLocation, backDirection);

          playerMove.move();

          this.#previousMoveCommand = backDirection;

          return {
            event: "MOVE",
            eventData: {
              location: this.playerLocation.getID(),
              description: this.playerLocation.describe(),
            },
          };
        }

        if (!inputs.direction) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_MOVEMENT" },
          };
        }

        const playerMove = new PlayerMove(
          this.playerLocation,
          inputs.direction[0]
        ).move();

        if (playerMove === "NO_CONNECTION") {
          return {
            event: "INVALID",
            eventData: { status: "NO_CONNECTION" },
          };
        }

        this.#previousMoveCommand = inputs.direction[0];

        return {
          event: "MOVE",
          eventData: {
            location: this.playerLocation.getID(),
            description: this.playerLocation.describe(),
          },
        };

      case "take":
        if (inputs.words.length === 1) {
          return {
            event: "INVALID",
            eventData: { status: "NOTHING_REQUESTED_TAKE" },
          };
        }

        if (!inputs.nouns) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_TAKE_REQUEST" },
          };
        }

        return this._AddItemToInventory({
          itemID: inputs.nouns[0],
          keyItems: keyItems,
          weapons: weapons,
        });

      case "equip":
        if (inputs.words.length === 1) {
          return {
            event: "INVALID",
            eventData: { status: "NOTHING_REQUESTED_EQUIP" },
          };
        }

        if (!inputs.nouns) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_EQUIP_REQUEST" },
          };
        }

        const weaponToAdd = this.playerInventory
          .getWeapons()
          .find((item) => item.getID() === inputs.nouns[0]);

        if (!weaponToAdd) {
          return {
            event: "INVALID",
            eventData: {
              status: "NOTHING_TO_EQUIP",
            },
          };
        }

        this.playerInventory.equipWeapon(inputs.nouns[0]);

        return {
          event: "EQUIP",
          eventData: {
            itemName: weaponToAdd.getID(),
          },
        };

      case "attack":
        if (!inputs.nouns) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_ATTACK_TARGET" },
          };
        }

        const monsterCheck = validMonsters.find(
          (monster) => monster.getID() === inputs.nouns[0]
        );

        if (!monsterCheck) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_ATTACK_TARGET" },
          };
        }

        return this._doWeaponAttack(inputs.nouns[0], validMonsters);

      case "cast":
        if (!inputs.nouns) {
          return {
            event: "INVALID",
            eventData: { status: "INCOMPLETE_SPELL_NOSPELL" },
          };
        }

        if (!this.playerInventory.getKnownSpellStats(inputs.nouns[0])) {
          return {
            event: "INVALID",
            eventData: { status: "INCOMPLETE_SPELL_INFORMATION" },
          };
        }

        if (!inputs.subject) {
          if (!inputs.prepositions) {
            return {
              event: "INVALID",
              eventData: {
                status: "INCOMPLETE_SPELL_NOPREP_NOSUB",
                spellID: inputs.nouns[0],
              },
            };
          }
          return {
            event: "INVALID",
            eventData: {
              status: "INCOMPLETE_SPELL_NOSUB",
              spellID: inputs.nouns[0],
            },
          };
        }

        const monsterCheckSpell = validMonsters.find(
          (monster) => monster.getID() === inputs.nouns[1]
        );

        if (!monsterCheckSpell) {
          return {
            event: "INVALID",
            eventData: { status: "INVALID_SPELL_TARGET" },
          };
        }

        return this._doSpellAttack(
          inputs.nouns[0],
          inputs.subject[0],
          validMonsters
        );

      case "quit":
        return { event: "QUIT", eventData: { status: "quit" } };

      default:
        throw new Error("Invalid Command");
    }
  }

  _AddItemToInventory({
    itemID,
    keyItems,
    weapons,
  }: {
    itemID: string;
    keyItems: KeyItems[];
    weapons: Weapon[];
  }): ActionReturn {
    const keyItemToAdd = keyItems.find((item) => item.getID() === itemID);
    const weaponToAdd = weapons.find((item) => item.getID() === itemID);

    if (keyItemToAdd) {
      this.playerInventory.addKeyItem(keyItemToAdd);
      return {
        event: "TAKE",
        eventData: { itemName: keyItemToAdd.getID() },
      };
    }

    if (weaponToAdd) {
      this.playerInventory.addWeapon(weaponToAdd);
      return {
        event: "TAKE",
        eventData: { itemName: weaponToAdd.getID() },
      };
    }

    return {
      event: "INVALID",
      eventData: { status: "NOTHING_TO_TAKE" },
    };
  }

  _doWeaponAttack(secondaryCommand, validMonsters): ActionReturn {
    const targetMonster = validMonsters.find(
      (monster) =>
        monster.getID() === secondaryCommand.toLowerCase().replace(" ", "")
    );

    const playerAttack = new PlayerAttack(this.playerInventory);

    const attackResults = playerAttack.attack();

    const didHit = monsterDamage(
      targetMonster,
      attackResults.attackValue,
      attackResults.damageValue
    );

    if (didHit === "Already Dead") {
      return {
        event: "ATTACK_ALREADY_DEAD",
        eventData: { monsterName: targetMonster.getName() },
      };
    }

    if (didHit === "Struck" && targetMonster.getHP() <= 0) {
      return {
        event: "ATTACK_KILL",
        eventData: {
          attackValue: attackResults.attackValue,
          damageValue: attackResults.damageValue,
          weaponName: this.playerInventory.getEquippedWeaponID(),
          monsterName: targetMonster.getName(),
        },
      };
    }

    if (didHit === "Struck") {
      return {
        event: "ATTACK_HIT",
        eventData: {
          attackValue: attackResults.attackValue,
          damageValue: attackResults.damageValue,
          weaponName: this.playerInventory.getEquippedWeaponID(),
          monsterName: targetMonster.getName(),
          monsterHP: targetMonster.getHP(),
        },
      };
    }

    return {
      event: "ATTACK_MISS",
      eventData: {
        attackValue: attackResults.attackValue,
        weaponName: this.playerInventory.getEquippedWeaponID(),
        monsterName: targetMonster.getName(),
      },
    };
  }

  _doSpellAttack(spellID, spellTarget, validMonsters): ActionReturn {
    const targetMonster = validMonsters.find(
      (monster) => monster.getID() === spellTarget
    );

    const playerCast = new PlayerCast(this.playerInventory);

    this.playerStats.changeMana(-1);

    const attackResults = playerCast.attack(spellID);

    const didHit = monsterDamage(
      targetMonster,
      attackResults.attackValue,
      attackResults.damageValue
    );

    if (didHit === "Already Dead") {
      return {
        event: "SPELL_ALREADY_DEAD",
        eventData: {
          monsterName: targetMonster.getName(),
          spellName: spellID,
        },
      };
    }

    if (didHit === "Struck" && targetMonster.getHP() <= 0) {
      return {
        event: "SPELL_KILL",
        eventData: {
          spellName: spellID,
          attackValue: attackResults.attackValue,
          damageValue: attackResults.damageValue,
          monsterName: targetMonster.getName(),
        },
      };
    }

    if (didHit === "Struck") {
      return {
        event: "SPELL_HIT",
        eventData: {
          spellName: spellID,
          attackValue: attackResults.attackValue,
          damageValue: attackResults.damageValue,
          monsterName: targetMonster.getName(),
          monsterHP: targetMonster.getHP(),
        },
      };
    }

    return {
      event: "SPELL_MISS",
      eventData: {
        spellName: spellID,
        attackValue: attackResults.attackValue,
        monsterName: targetMonster.getName(),
      },
    };
  }
}

export default PlayerAction;
