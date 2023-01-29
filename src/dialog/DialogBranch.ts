type Dialog = (
  | { text: string }
  | { text: string; answer: { answText: string; next: string }[] }
  | { id: string; text: string; next: string }
  | { id: string }
)[];

class DialogBranch {
  #dialog: Dialog;
  #curStep = 0;

  constructor(dialog: Dialog) {
    this.#dialog = dialog;
  }

  getStep() {
    return this.#curStep;
  }

  step(steps?: number) {
    if (!steps) {
      return (this.#curStep += 1);
    }
    return (this.#curStep += steps);
  }

  answer(playerAnswer: string) {
    const startDialog = this.#dialog[this.#curStep];

    if ("answer" in startDialog) {
      const selectedAnswer = startDialog.answer.find(
        (answ) => answ.answText === playerAnswer
      );

      const findStepIndex = (e) => e.id === selectedAnswer.next;

      this.#curStep = this.#dialog.findIndex(findStepIndex);

      return this.getCurDialog();
    }
  }

  getCurDialog() {
    const curDialog = this.#dialog[this.#curStep];

    try {
      if ("answer" in curDialog) {
        let answArr = [];

        curDialog.answer.map((answer) => answArr.push(answer.answText));

        return { text: curDialog.text, answers: answArr };
      }

      if ("text" in curDialog) {
        return { text: curDialog.text };
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default DialogBranch;
