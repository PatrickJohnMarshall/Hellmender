import inquirer from 'inquirer';
import formatLog from '../../util/formatLog';
import PlayerMove from './PlayerMove';
import IPlayerLocation from '../types/IPlayerLocation';

type InquirerResponse = {
  action: string;
};

class PlayerAction {
  #playerLocation;

  constructor(playerLocation: IPlayerLocation) {
    this.#playerLocation = playerLocation;
  }

  async action(prompt: string): Promise<void> {
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

    this._doAction(commands[0], commands[1]);
  }

  _validateCommand(command: string): boolean {
    if (command.toLowerCase() === 'quit') {
      throw new Error('Player Exit');
    }
    if (command.toLowerCase() === 'move') {
      return true;
    }
    return false;
  }

  _doAction(command: string, secondaryCommand: string): void {
    switch (command) {
      case 'move':
        const playerMove = new PlayerMove(
          this.#playerLocation,
          secondaryCommand
        );
        playerMove.move();
        break;
      default:
        throw new Error('Invalid Command');
    }
  }
}

export default PlayerAction;
