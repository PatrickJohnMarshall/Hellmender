import inquirer from 'inquirer';
import formatLog from '../util/formatLog';

type InquirerResponse = {
  action: string;
};

class PlayerAction {
  constructor() {}

  async action(prompt: string): Promise<string> {
    const input = [
      {
        type: 'input',
        name: 'action',
        message: prompt,
      },
    ];

    let answer = (await inquirer.prompt(input)) as InquirerResponse;
    let validAnswer = this.validateAnswer(answer.action);

    while (!validAnswer) {
      formatLog('Follow the instructions dumbass.');
      answer = await inquirer.prompt(input);
      validAnswer = this.validateAnswer(answer.action);
    }
    return answer.action;
  }

  validateAnswer(answer: string): boolean {
    const commands = answer.split(' ');
    if (
      this.validateCommand(commands[0]) &&
      this.validateDirection(commands[1])
    ) {
      return true;
    }
    return false;
  }

  validateCommand(command: string): boolean {
    if (command.toLowerCase() === 'move') {
      return true;
    }
    return false;
  }

  validateDirection(direction: string): boolean {
    switch (direction.toLocaleLowerCase()) {
      case 'left':
      case 'right':
      case 'forward':
      case 'back':
        return true;
      default:
        return false;
    }
  }
}

export default PlayerAction;
