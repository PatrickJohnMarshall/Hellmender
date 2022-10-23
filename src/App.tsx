import { useState } from "react";
import GameEngine from "components/GameEngine";
import StartScreen from "components/StartScreen";

function App() {
  const [gameState, setGameState] = useState<"start" | "game">("start");

  if (gameState === "game") {
    return <GameEngine setGameState={setGameState} />;
  }

  return <StartScreen setGameState={setGameState} />;
}

export default App;
