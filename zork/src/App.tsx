import React, { useState } from 'react';
import ReadoutGrid from './components/ReadoutGrid';
import './App.css';
import 'styles/_containers_and_frames.scss';
import { TerminalController } from './components/Terminal';
import TerminalLogContext from './context/TerminalLog';
import { TerminalOutput } from 'react-terminal-ui';
import buildLayout from './src-legacy/tower-layout/buildLayout';
// import generateMonsters from './src-legacy/monsters/generateMonsters';
import Fist from './src-legacy/items/weapons/Fist';
import PlayerAction from './player/PlayerAction';
import PlayerLocation from './src-legacy/player/PlayerLocation';
import PlayerInventory from './src-legacy/player/PlayerInventory';

const startingRoom = buildLayout();
// const monsters = generateMonsters();
const fist = new Fist();
const playerLocation = new PlayerLocation(startingRoom);
const playerInventory = new PlayerInventory(fist);
const playerAction = new PlayerAction(playerLocation, playerInventory);

function App() {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>{`${playerLocation.describe()}`}</TerminalOutput>,
  ]);

  return (
    <TerminalLogContext.Provider
      value={{
        terminalLog,
        add: (newLine: string) => {
          const actionResult = playerAction.action(newLine, []);
          setTerminalLog(
            terminalLog.concat([
              <TerminalOutput>{`>${newLine}`}</TerminalOutput>,
              <TerminalOutput>{`${actionResult}`}</TerminalOutput>,
              <TerminalOutput>{playerLocation.describe()}</TerminalOutput>,
            ])
          );
        },
      }}
    >
      <TerminalController />
      <ReadoutGrid />
    </TerminalLogContext.Provider>
  );
}

export default App;
