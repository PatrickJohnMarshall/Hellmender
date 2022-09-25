import React from 'react';

const TerminalLogContext = React.createContext({
  terminalLog: [],
  add: (newLine) => {},
});

export default TerminalLogContext;
