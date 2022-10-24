import PlayerMove from "./action/PlayerMove";
import PlayerAttack from "./action/PlayerAttack";
import PlayerCast from "./action/PlayerCast";
import Monster from "../monsters/types/Monster";
import monsterDamage from "../monsters/monsterDamage";
import IPlayerLocation from "./types/IPlayerLocation";
import IPlayerInventory from "./types/IPlayerInventory";

class PlayerAction {
  #playerLocation;
  #playerInventory;

  constructor(
    playerLocation: IPlayerLocation,
    playerInventory: IPlayerInventory
  ) {
    this.#playerLocation = playerLocation;
    this.#playerInventory = playerInventory;
  }

  action(
    answer: string,
    validMonsters: Monster[]
  ): string | { id: string; attackValue: number; damageValue: number } {
    const commands = answer.split(" ");
    const validAnswer = this._validateCommand(commands[0]);

    if (!validAnswer) {
      return "Invalid command - Please see guide for list of valid commands.";
    }

    return this._doAction({
      primaryCommand: commands[0],
      secondaryCommand: commands[1],
      fourthCommand: commands[3],
      validMonsters,
    });
  }

  _validateCommand(command: string): boolean {
    const validCommands = ["quit", "move", "attack", "look", "cast"];

    return !!validCommands.find((c) => c === command);
  }

  _doAction({
    primaryCommand,
    secondaryCommand,
    fourthCommand,
    validMonsters,
  }: {
    primaryCommand: string;
    secondaryCommand: string;
    fourthCommand: string | undefined;
    validMonsters: Monster[];
  }): string | { id: string; attackValue: number; damageValue: number } {
    switch (primaryCommand) {
      case "look":
        return this.#playerLocation.describe();

      case "move":
        // secondaryCommand is a direction
        const playerMove = new PlayerMove(
          this.#playerLocation,
          secondaryCommand
        );
        playerMove.move();
        return this.#playerLocation.describe();

      case "attack":
        return this._doWeaponAttack(secondaryCommand, validMonsters);

      case "cast":
        return this._doSpellAttack(
          secondaryCommand,
          fourthCommand,
          validMonsters
        );

      case "quit":
        return "quit";

      default:
        throw new Error("Invalid Command");
    }
  }

  _doWeaponAttack(secondaryCommand, validMonsters) {
    // secondaryCommand is monsterName
    const validMonsterIDs = validMonsters.map((monster) => monster.getID());

    const playerAttack = new PlayerAttack(this.#playerInventory);

    const attackResults = playerAttack.attack(
      secondaryCommand,
      validMonsterIDs
    );

    return this._doAttack(attackResults, validMonsters);
  }

  _doSpellAttack(secondaryCommand, spellTarget, validMonsters) {
    // secondaryCommand is monsterName
    const validMonsterIDs = validMonsters.map((monster) => monster.getID());

    const playerCast = new PlayerCast(this.#playerInventory);

    const attackResults = playerCast.attack(
      secondaryCommand,
      spellTarget,
      validMonsterIDs
    );

    return this._doAttack(attackResults, validMonsters);
  }

  _doAttack(attackResults, validMonsters) {
    const targetMonster = validMonsters.find(
      (monster) => monster.getID() === attackResults.id
    );

    const didHit = monsterDamage(
      targetMonster,
      attackResults.attackValue,
      attackResults.damageValue
    );

    if (didHit) {
      return `>You struck the ${targetMonster.getName()} for ${
        attackResults.damageValue
      } damage. |${targetMonster.getName()} HP: ${targetMonster.getHP()}| |Attack: ${
        attackResults.attackValue
      }|`;
    } else
      return `>You missed the ${targetMonster.getName()}. |Attack: ${
        attackResults.attackValue
      }|`;
  }
}

export default PlayerAction;
