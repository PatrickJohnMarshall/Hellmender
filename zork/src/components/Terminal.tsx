import React, { useContext, useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import TerminalLogContext from '../context/TerminalLog';

export function TerminalController(props = {}) {
  const terminalLogContext = useContext(TerminalLogContext);

  return (
    <div className="container">
      <Terminal
        prompt=">"
        name="ZORK"
        colorMode={ColorMode.Light}
        onInput={(terminalInput) => terminalLogContext.add(terminalInput)}
      >
        {terminalLogContext.terminalLog}
      </Terminal>
    </div>
  );
}
