import { useState } from "react";
import GameEngine from "components/GameEngine";
import StartScreen from "components/StartScreen";
import Intro from "components/Intro/index";
import { Saves } from "components/Saves";

import { GameState } from "state/GameState";

import GameStateContext from "context/GameStateContext";

const state = new GameState();

function App() {
  if (!localStorage.getItem("saveFiles")) {
    localStorage.setItem("saveFiles", JSON.stringify([]));
  }

  const [gameState, setGameState] = useState<
    "start" | "game" | "intro" | "saves"
  >("start");

  function gameWindow() {
    if (gameState === "game") {
      return <GameEngine setGameState={setGameState} />;
    }

    if (gameState === "intro") {
      return <Intro setGameState={setGameState} />;
    }

    if (gameState === "saves") {
      return <Saves setGameState={setGameState} />;
    }

    return <StartScreen setGameState={setGameState} />;
  }

  return (
    <GameStateContext.Provider value={state}>
      {gameWindow()}
    </GameStateContext.Provider>
  );
}

export default App;
