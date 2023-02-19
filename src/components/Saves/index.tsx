import { GameState } from "state/GameState";
import InterfaceAudio from "audio/InterfaceAudio";

import {
  SaveScreen,
  SaveShell,
  BackButton,
  TitleBox,
  TitleText,
  SaveSlotBox,
} from "./saveStyles";

import { SaveSlot } from "./SaveSlots";

type Props = {
  setGameState: (state: "start" | "game" | "intro" | "saves") => void;
  state: GameState;
};

export const Saves: React.FC<Props> = ({ setGameState, state }) => {
  const interfaceAudio = new InterfaceAudio();

  function saveSlotPrint() {
    let saveSlots = [];
    for (let i = 0; i < 6; i++) {
      saveSlots.push(<SaveSlot key={i} fileInfo={state.saveSlots[i]} />);
    }
    return saveSlots;
  }

  return (
    <SaveScreen>
      <button
        onClick={() => {
          state.saveState(0);
        }}
      >
        Save Test
      </button>
      <SaveShell>
        <TitleBox>
          <BackButton
            onClick={() => {
              setGameState("start");
              interfaceAudio.playButton();
            }}
          >
            Back
          </BackButton>
          <TitleText>Select Save File</TitleText>
        </TitleBox>
        <SaveSlotBox>{saveSlotPrint()}</SaveSlotBox>
      </SaveShell>
    </SaveScreen>
  );
};
