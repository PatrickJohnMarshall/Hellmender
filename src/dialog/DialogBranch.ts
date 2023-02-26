type Dialog = (
  | { text: string }
  | { text: string; answer: { answText: string; next: string }[] }
  | { id: string; text: string; next: string }
  | {
      id: string;
      text: string;
      rep: { target: string; value: number };
      next: string;
    }
  | { id: string; text: string }
)[];

class DialogBranch {
  #dialog: Dialog;
  #curStep = 0;

  constructor(dialog: Dialog) {
    this.#dialog = dialog;
  }

  get currentStep() {
    return this.#curStep;
  }

  step() {
    const startDialog = this.#dialog[this.#curStep];

    if ("next" in startDialog) {
      const findStepIndex = (e) => e.id === startDialog.next;

      this.#curStep = this.#dialog.findIndex(findStepIndex);
    } else this.#curStep += 1;
  }

  answer(playerAnswer: string) {
    const startDialog = this.#dialog[this.#curStep];

    if ("answer" in startDialog) {
      const selectedAnswer = startDialog.answer.find(
        (answ) => answ.answText === playerAnswer
      );

      const findStepIndex = (e) => e.id === selectedAnswer.next;
      this.#curStep = this.#dialog.findIndex(findStepIndex);

      const newDialog = this.#dialog[this.#curStep];
      if ("rep" in newDialog) {
        return newDialog.rep;
      }
    }
  }

  curDialog() {
    const curDialog = this.#dialog[this.#curStep];

    if ("answer" in curDialog) {
      let answArr = [];

      curDialog.answer.map((answer) => answArr.push(answer.answText));

      return { text: curDialog.text, answers: answArr };
    }

    if ("text" in curDialog) {
      return { text: curDialog.text };
    }
  }
}

export default DialogBranch;
