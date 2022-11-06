import React, { useContext } from "react";
import TerminalLogContext from "../context/TerminalLog";
import Terminal from "./Terminal";

export function TerminalController({ playerAction, monsters, setGameState }) {
  const terminalLogContext = useContext(TerminalLogContext);

  return (
    <div
      className="container rpgui-container framed-golden-2 rpgui-content"
      style={{
        height: "57vh",
        maxWidth: "75rem",
        overflowWrap: "break-word",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Terminal
        prompt=">"
        name="ZORK"
        onInput={(terminalInput) => {
          const actionResult = playerAction.action(terminalInput, [
            ...monsters,
          ]);
          if (actionResult === "quit") {
            setGameState("start");
          }
          const output = `\n>` + terminalInput + `\n\n` + actionResult;
          terminalLogContext.add(output);
        }}
      >
        {terminalLogContext.terminalLog}
      </Terminal>
    </div>
  );
}
