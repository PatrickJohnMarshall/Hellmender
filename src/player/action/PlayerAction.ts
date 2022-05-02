import inquirer from 'inquirer';
import formatLog from '../../util/formatLog';
import PlayerMove from './PlayerMove';

type InquirerResponse = {
  action: string;
};

class PlayerAction {
  #playerLocation;

  constructor(playerLocation: any) {
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

    let answer = (await inquirer.prompt(input)) as InquirerResponse;
    let commands = answer.action.split(' ');
    let validAnswer = this.validateCommand(commands[0]);

    while (!validAnswer) {
      formatLog('Follow the instructions dumbass.');
      answer = await inquirer.prompt(input);
      commands = answer.action.split(' ');
      validAnswer = this.validateCommand(answer.action);
    }

    this.doAction(commands[0], commands[1]);
  }

  validateCommand(command: string): boolean {
    if (command.toLowerCase() === 'quit') {
      throw new Error('Player Exit');
    }
    if (command.toLowerCase() === 'move') {
      return true;
    }
    return false;
  }

  doAction(command: string, secondaryCommand: string): void {
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
