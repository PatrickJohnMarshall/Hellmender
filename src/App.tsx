import { useState } from "react";
import GameEngine from "components/GameEngine";
import StartScreen from "components/StartScreen";
import Intro from "components/Intro/index";
import { Saves } from "components/Saves";

import { GameState } from "state/GameState";

function App() {
  const state = new GameState();

  if (!localStorage.getItem("saveFiles")) {
    localStorage.setItem("saveFiles", JSON.stringify([]));
  }

  const [gameState, setGameState] = useState<
    "start" | "game" | "intro" | "saves"
  >("start");

  if (gameState === "game") {
    return <GameEngine setGameState={setGameState} state={state} />;
  }

  if (gameState === "intro") {
    return <Intro setGameState={setGameState} state={state} />;
  }

  if (gameState === "saves") {
    return <Saves setGameState={setGameState} state={state}></Saves>;
  }

  return <StartScreen setGameState={setGameState} />;
}

export default App;
