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
import FireBolt from "spells/spells/FireBolt";

import PlayerAction from "./player/PlayerAction";
import PlayerLocation from "./player/PlayerLocation";
import PlayerInventory from "./player/PlayerInventory";
import PlayerStats from "player/PlayerStats";

const startingRoom = buildLayout();
const startingItem = new Fist();
const startingSpell = new FireBolt();

const playerLocation = new PlayerLocation(startingRoom);
const playerInventory = new PlayerInventory(startingItem);
const playerAction = new PlayerAction(playerLocation, playerInventory);
const playerStats = new PlayerStats({
  str: 8,
  dex: 12,
  con: 12,
  int: 15,
  wis: 11,
  cha: 7,
  hp: 6,
  ac: 10,
});

playerInventory.learnSpell(startingSpell);
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
        playerStats={playerStats}
        monsters={monsters.getMonstersForRoom(playerLocation.getID())}
        weapons={playerInventory.getWeapons()}
        spells={playerInventory.getSpells()}
      />
    </TerminalLogContext.Provider>
  );
}

export default App;
