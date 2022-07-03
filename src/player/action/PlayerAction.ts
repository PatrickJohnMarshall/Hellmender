import inquirer from 'inquirer';
import formatLog from '../../util/formatLog';
import PlayerMove from './PlayerMove';
import PlayerAttack from './PlayerAttack';
import IPlayerLocation from '../types/IPlayerLocation';
import IPlayerAttack from '../types/IPlayerAttack';
import IPlayerInventory from '../types/IPlayerInventory';

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

  async action(prompt: string, validMonsterIDs: string[]): Promise<void> {
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
      validAnswer = this._validateCommand(answer.action);
    }

    this._doAction(commands[0], commands[1], validMonsterIDs);
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
    return false;
  }

  _doAction(
    command: string,
    secondaryCommand: string,
    validMonsterIDs: string[]
  ): void {
    switch (command) {
      case 'move':
        // secondaryCommand is a direction
        const playerMove = new PlayerMove(
          this.#playerLocation,
          secondaryCommand
        );
        playerMove.move();
        break;
      case 'attack':
        // secondaryCommand is monsterName
        const playerAttack = new PlayerAttack(this.#playerInventory);
        playerAttack.attack(secondaryCommand, validMonsterIDs);
        break;
      default:
        throw new Error('Invalid Command');
    }
  }
}

export default PlayerAction;
