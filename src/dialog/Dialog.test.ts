import DialogBranch from "./DialogBranch";
import DialogState from "./DialogState";

const mockDialogStates = {
  grumpkin: 50,
  imp: 30,
  skeleton: 15,
  wizard: 80,
  gamCube: 0,
};

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

const mockDialog: Dialog = [
  { text: "Hello this is text." },
  { text: "Yep." },
  { text: "Sure is.", next: "init_q" },

  { text: "I'm not real, I'm just a break between testing texts." },

  {
    id: "not_real",
    text: "Just a fake set of questions to test if the step function skips to the directed 'next'.",
    answer: [
      { answText: "Option 1", next: "Option_1_result" },
      { answText: "Option 2", next: "Option_2_result" },
    ],
  },

  {
    id: "init_q",
    text: "Can you see me?",
    answer: [
      {
        answText: "We're shit out of luck, captain.",
        next: "init_q_failure_b1",
      },
      { answText: "God I hope so.", next: "init_q_success" },
      { answText: "Wrong way.", next: "init_q_not_real" },
    ],
  },

  {
    id: "init_q_failure_b1",
    text: "Are you serious?",
    answer: [
      { answText: "Naw man. Get pranked.", next: "init_q_failure_b1_prank" },
      { answText: "Deadly.", next: "init_q_failure_b1_real" },
    ],
  },

  {
    id: "init_q_failure_b1_real",
    text: "Dear god.",
    rep: { target: "grumpkin", value: -30 },
    next: "init_q_end",
  },
  { id: "init_q_failure_b1_prank", text: "Funny.", next: "init_q_end" },
  { id: "init_q_success", text: "Thank god.", next: "init_q_end" },
  { id: "init_q_not_real", text: "You fucked up.", next: "init_q_end" },

  { id: "init_q_end", text: "Fin." },
];

describe("PlayerStats", () => {
  test("sets starting attitudes", () => {
    const dialogState = new DialogState(mockDialogStates);

    expect(dialogState.states.grumpkin).toEqual(50);
    expect(dialogState.states.gamCube).toEqual(0);
  });

  test("changes state value", () => {
    const dialogState = new DialogState(mockDialogStates);

    dialogState.changeState("grumpkin", -10);
    dialogState.changeState("gamCube", 10);

    expect(dialogState.states.grumpkin).toEqual(40);
    expect(dialogState.states.gamCube).toEqual(10);
  });

  test("steps through dialog", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();

    expect(grumpkinDialog.curDialog().text).toEqual("Yep.");
  });

  test("answers question", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.answer("God I hope so.");

    expect(grumpkinDialog.curDialog().text).toEqual("Thank god.");
  });

  test("ends dialog", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.answer("God I hope so.");
    grumpkinDialog.step();

    expect(grumpkinDialog.curDialog().text).toEqual("Fin.");
  });

  test("navigates branches", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.answer("We're shit out of luck, captain.");
    grumpkinDialog.answer("Naw man. Get pranked.");
    grumpkinDialog.step();

    expect(grumpkinDialog.curDialog().text).toEqual("Fin.");
  });

  test("change rep based off of answers", () => {
    let answRes;

    const mockGrumpState = {
      grumpkin: 50,
    };

    const dialogState = new DialogState(mockGrumpState);
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();
    grumpkinDialog.step();
    grumpkinDialog.step();

    grumpkinDialog.answer("We're shit out of luck, captain.");

    answRes = grumpkinDialog.answer("Deadly.");

    dialogState.changeState(answRes.target, answRes.value);

    expect(dialogState.states.grumpkin).toEqual(20);
  });
});
