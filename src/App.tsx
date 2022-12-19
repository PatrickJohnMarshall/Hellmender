import { useState } from "react";
import GameEngine from "components/GameEngine";
import StartScreen from "components/StartScreen";
import Intro from "components/Intro/index";

function App() {
  const [gameState, setGameState] = useState<"start" | "game" | "intro">(
    "start"
  );

  if (gameState === "game") {
    return <GameEngine setGameState={setGameState} />;
  }

  if (gameState === "intro") {
    return <Intro setGameState={setGameState} />;
  }

  return <StartScreen setGameState={setGameState} />;
}

export default App;
