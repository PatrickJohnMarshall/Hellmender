import { useState, useContext } from "react";
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

import { GameState } from "state/GameState";
import GameStateContext from "context/GameStateContext";

import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Intro4 from "./Intro4";

type Props = {
  setGameState: (state: "start" | "game" | "intro" | "saves") => void;
};

const Intro: React.FC<Props> = ({ setGameState }) => {
  const state = useContext<GameState>(GameStateContext);

  const [introState, setIntroState] = useState(1);
  const [newName, setNewName] = useState<string>("are you?");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [wrongness, increaseWrongness] = useState(0);

  const interfaceAudio = new InterfaceAudio();

  function handleNameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newName === "are you?") {
      increaseWrongness(wrongness + 1);
    }

    if (newName !== "are you?" && newName !== "") {
      state.playerName = newName;
      console.log(state.playerName);
      setSubmittedName(newName);
    }
  }

  const introNum = {
    1: Intro1,
    2: Intro2,
    3: Intro3,
    4: Intro4,
  };

  const IntroText = introNum[introState]({
    handleNameSubmit: handleNameSubmit,
    newName: newName,
    setNewName: setNewName,
    submittedName: submittedName,
    wrongness: wrongness,
  });

  const goForward = () => {
    interfaceAudio.playButton();

    if (introState === 4) {
      return setGameState("game");
    }

    setIntroState(introState + 1);
  };

  const goBack = () => {
    interfaceAudio.playButton();

    if (introState === 1) {
      return setGameState("start");
    }

    setIntroState(introState - 1);
  };

  function backButtonReadout() {
    if (introState === 1) {
      return <BackButton onClick={goBack}>Home</BackButton>;
    }

    return <BackButton onClick={goBack}>Back</BackButton>;
  }

  function forwardButtonReadout() {
    if (introState === 2 && (!submittedName || submittedName === "are you?")) {
      return "";
    }

    if (introState === 2) {
      return (
        <ForwardButton onClick={goForward}>
          {`Welcome, ${submittedName}`}
        </ForwardButton>
      );
    }

    if (introState === 4) {
      return <ForwardButton onClick={goForward}>Accept</ForwardButton>;
    }

    return <ForwardButton onClick={goForward}>Next</ForwardButton>;
  }

  return (
    <IntroScreen>
      <IntroShell>
        <IntroBox>
          <IntroShellText textLength={IntroText.length}>
            {makeTextComponent(IntroText)}
          </IntroShellText>

          {backButtonReadout()}

          <PageBox>{`${introState}/4`}</PageBox>

          {forwardButtonReadout()}
        </IntroBox>
      </IntroShell>
    </IntroScreen>
  );
};

export default Intro;
