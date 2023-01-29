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
  | { id: string }
)[];

const mockDialog: Dialog = [
  { text: "Hello this is text." },
  { text: "Yep." },
  { text: "Sure is." },

  {
    text: "Can you see me?",
    answer: [
      { answText: "We're shit out of luck, captain.", next: "answ_failure" },
      { answText: "God I hope so.", next: "answ_success" },
    ],
  },

  { id: "answ_failure", text: "Oh god no.", next: "answ_end" },
  { id: "answ_success", text: "Thank god.", next: "answ_end" },

  { id: "answ_end", text: "Fin." },
];

describe("PlayerStats", () => {
  test("sets starting attitudes", () => {
    const dialogState = new DialogState(mockDialogStates);

    expect(dialogState.getStates().grumpkin).toEqual(50);
    expect(dialogState.getStates().gamCube).toEqual(0);
  });

  test("changes state value", () => {
    const dialogState = new DialogState(mockDialogStates);

    dialogState.changeState("grumpkin", -10);
    dialogState.changeState("gamCube", 10);

    expect(dialogState.getStates().grumpkin).toEqual(40);
    expect(dialogState.getStates().gamCube).toEqual(10);
  });

  test("steps through dialog", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step();

    expect(grumpkinDialog.getCurDialog().text).toEqual("Yep.");
  });

  test("answers question", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step(3);
    grumpkinDialog.answer("God I hope so.");

    expect(grumpkinDialog.getCurDialog().text).toEqual("Thank god.");
  });

  test("ends dialog", () => {
    const grumpkinDialog = new DialogBranch(mockDialog);

    grumpkinDialog.step(3);
    grumpkinDialog.answer("God I hope so.");
    grumpkinDialog.step();

    expect(grumpkinDialog.getCurDialog().text).toEqual("Fin.");
  });
});
