import PlayerMove from "../src-legacy/player/action/PlayerMove";
import PlayerAttack from "../src-legacy/player/action/PlayerAttack";
import Monster from "../monsters/types/Monster";
import IPlayerLocation from "../src-legacy/player/types/IPlayerLocation";
import IPlayerInventory from "../src-legacy/player/types/IPlayerInventory";
import monsterDamage from "../monsters/monsterDamage";

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
      return "Follow the instructions, dumbass.";
    }

    return this._doAction(commands[0], commands[1], validMonsters);
  }

  _validateCommand(command: string): boolean {
    if (command.toLowerCase() === "quit") {
      throw new Error("Player Exit");
    }
    if (command.toLowerCase() === "move") {
      return true;
    }
    if (command.toLowerCase() === "attack") {
      return true;
    }
    if (command.toLowerCase() === "look") {
      return true;
    }
    return false;
  }

  _doAction(
    command: string,
    secondaryCommand: string,
    validMonsters: Monster[]
  ): string | { id: string; attackValue: number; damageValue: number } {
    switch (command) {
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
        return this._doPlayerAttack(secondaryCommand, validMonsters);

      default:
        throw new Error("Invalid Command");
    }
  }

  _doPlayerAttack(secondaryCommand, validMonsters) {
    // secondaryCommand is monsterName
    const validMonsterIDs = validMonsters.map((monster) => monster.getID());

    const playerAttack = new PlayerAttack(this.#playerInventory);

    const attackResults = playerAttack.attack(
      secondaryCommand,
      validMonsterIDs
    );

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
