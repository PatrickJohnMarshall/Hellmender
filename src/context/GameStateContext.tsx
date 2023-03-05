import React from "react";

import { GameState } from "state/GameState";

const GameStateContext = React.createContext(new GameState());

export default GameStateContext;
