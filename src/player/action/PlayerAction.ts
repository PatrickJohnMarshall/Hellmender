import inquirer from 'inquirer';
import formatLog from '../../util/formatLog';
import PlayerMove from './PlayerMove';
import PlayerAttack from './PlayerAttack';
import Monster from '../../monsters/types/Monster';
import IPlayerLocation from '../types/IPlayerLocation';
import IPlayerInventory from '../types/IPlayerInventory';
import monsterDamage from '../../monsters/monsterDamage';

type InquirerResponse = {
  action: string;
};

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

  async action(
    prompt: string,
    validMonsters: Monster[]
  ): Promise<void | { id: string; attackValue: number; damageValue: number }> {
    const input = [
      {
        type: 'input',
        name: 'action',
        message: prompt,
      },
    ];

    formatLog('');
    let answer = (await inquirer.prompt(input)) as InquirerResponse;
    let commands = answer.action.split(' ');
    let validAnswer = this._validateCommand(commands[0]);

    while (!validAnswer) {
      formatLog('Follow the instructions dumbass.');
      answer = await inquirer.prompt(input);
      commands = answer.action.split(' ');
      validAnswer = this._validateCommand(commands[0]);
    }

    return this._doAction(commands[0], commands[1], validMonsters);
  }

  _validateCommand(command: string): boolean {
    if (command.toLowerCase() === 'quit') {
      throw new Error('Player Exit');
    }
    if (command.toLowerCase() === 'move') {
      return true;
    }
    if (command.toLowerCase() === 'attack') {
      return true;
    }
    if (command.toLowerCase() === 'look') {
      return true;
    }
    return false;
  }

  _doAction(
    command: string,
    secondaryCommand: string,
    validMonsters: Monster[]
  ): void | { id: string; attackValue: number; damageValue: number } {
    switch (command) {
      case 'look':
        this.#playerLocation.describe();
        break;
      case 'move':
        // secondaryCommand is a direction
        const playerMove = new PlayerMove(
          this.#playerLocation,
          secondaryCommand
        );
        playerMove.move();
        this.#playerLocation.describe();
        break;
      case 'attack':
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
          formatLog(
            `You struck the ${targetMonster.getName()} for ${
              attackResults.damageValue
            } damage. |${targetMonster.getName()} HP: ${targetMonster.getHP()}| |Attack: ${
              attackResults.attackValue
            }|`
          );
        } else
          formatLog(
            `You missed the ${targetMonster.getName()}. |Attack: ${
              attackResults.attackValue
            }|`
          );
        break;
      default:
        throw new Error('Invalid Command');
    }
  }
}

export default PlayerAction;
