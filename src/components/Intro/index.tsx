import { useState } from "react";
import InterfaceAudio from "audio/InterfaceAudio";
import makeTextComponent from "util/makeTextComponent";

import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import {
  IntroScreen,
  IntroShell,
  IntroBox,
  IntroShellText,
  PageBox,
  BackButton,
  ForwardButton,
} from "./introStyles";

import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Intro4 from "./Intro4";

function Intro({
  setGameState,
}: {
  setGameState: (state: "start" | "game" | "intro") => void;
}) {
  const [introState, setIntroState] = useState(1);
  const interfaceAudio = new InterfaceAudio();

  const introNum = {
    1: Intro1,
    2: Intro2,
    3: Intro3,
    4: Intro4,
  };

  const IntroText = introNum[introState]();

  return (
    <IntroScreen>
      <IntroShell>
        <IntroBox>
          <IntroShellText textLength={IntroText.length}>
            {makeTextComponent(IntroText)}
          </IntroShellText>

          <PageBox>{`${introState}/4`}</PageBox>

          <BackButton
            onClick={() => {
              introState === 1
                ? setGameState("start")
                : setIntroState(introState - 1);

              interfaceAudio.playButton();
            }}
          >
            {introState === 1 ? "Menu" : "Back"}
          </BackButton>

          <ForwardButton
            onClick={() => {
              introState === 4
                ? setGameState("game")
                : setIntroState(introState + 1);
              interfaceAudio.playButton();
            }}
          >
            {introState === 4 ? `"Accept"` : "Next"}
          </ForwardButton>
        </IntroBox>
      </IntroShell>
    </IntroScreen>
  );
}

export default Intro;
