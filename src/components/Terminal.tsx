import React, { useContext } from "react";
import Terminal, { ColorMode } from "react-terminal-ui";
import TerminalLogContext from "../context/TerminalLog";

export function TerminalController({ playerAction, monsters }) {
  const terminalLogContext = useContext(TerminalLogContext);

  return (
    <div className="container rpgui-container framed-golden">
      <Terminal
        prompt=">"
        name="ZORK"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          const actionResult = playerAction.action(terminalInput, [
            ...monsters,
          ]);
          const output = `\n>` + terminalInput + `\n\n` + actionResult;
          terminalLogContext.add(output);
        }}
      >
        {terminalLogContext.terminalLog}
      </Terminal>
    </div>
  );
}
