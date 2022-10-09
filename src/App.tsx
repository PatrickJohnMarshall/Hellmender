import React, { useState } from "react";
import ReadoutGrid from "./components/ReadoutGrid";
import "./App.css";
import "styles/_containers_and_frames.scss";
import { TerminalController } from "./components/Terminal";
import TerminalLogContext from "./context/TerminalLog";
import { TerminalOutput } from "react-terminal-ui";
import buildLayout from "./tower-layout/buildLayout";
import generateMonsters from "./monsters/generateMonsters";
import Fist from "./items/weapons/Fist";
import PlayerAction from "./player/PlayerAction";
import PlayerLocation from "./player/PlayerLocation";
import PlayerInventory from "./player/PlayerInventory";

const startingRoom = buildLayout();
const startingItem = new Fist();

const playerLocation = new PlayerLocation(startingRoom);
const playerInventory = new PlayerInventory(startingItem);
const playerAction = new PlayerAction(playerLocation, playerInventory);

const monsters = generateMonsters();

function App() {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>{`${playerLocation.describe()}`}</TerminalOutput>,
  ]);

  return (
    <TerminalLogContext.Provider
      value={{
        terminalLog,
        add: (newLine: string) => {
          setTerminalLog(
            terminalLog.concat([
              <TerminalOutput>{`${newLine}`}</TerminalOutput>,
            ])
          );
        },
      }}
    >
      <TerminalController
        playerAction={playerAction}
        monsters={monsters.getMonstersForRoom(playerLocation.getID())}
      />
      <ReadoutGrid
        monsters={monsters.getMonstersForRoom(playerLocation.getID())}
        weapons={playerInventory.getWeapons()}
      />
    </TerminalLogContext.Provider>
  );
}

export default App;
