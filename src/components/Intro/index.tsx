import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";

import { useState } from "react";
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

  if (introState === 1) {
    return <Intro1 introState={introState} setIntroState={setIntroState} />;
  }
  if (introState === 2) {
    return <Intro2 introState={introState} setIntroState={setIntroState} />;
  }
  if (introState === 3) {
    return <Intro3 introState={introState} setIntroState={setIntroState} />;
  }
  if (introState === 4) {
    return (
      <Intro4
        introState={introState}
        setIntroState={setIntroState}
        setGameState={setGameState}
      />
    );
  }
}

export default Intro;
