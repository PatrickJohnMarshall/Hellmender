import React, { useState } from 'react';
import './App.css';
import { TerminalController } from './components/Terminal';
import TerminalLogContext from './context/TerminalLog';
import { TerminalOutput } from 'react-terminal-ui';

function App() {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>You put on your robe and wizard hat.</TerminalOutput>,
  ]);

  return (
    <TerminalLogContext.Provider
      value={{
        terminalLog,
        add: (newLine: string) => {
          setTerminalLog(
            terminalLog.concat([<TerminalOutput>{newLine}</TerminalOutput>])
          );
        },
      }}
    >
      <TerminalController />
    </TerminalLogContext.Provider>
  );
}

export default App;
