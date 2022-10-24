import React, { useContext } from "react";
import TerminalLogContext from "../context/TerminalLog";
import Terminal from "./Terminal";
import "styles/_readout_box.scss";

export function TerminalController({ playerAction, monsters, setGameState }) {
  const terminalLogContext = useContext(TerminalLogContext);

  return (
    <div
      className="container rpgui-container framed-grey"
      style={{ height: "60vh" }}
    >
      <div
        className="container rpgui-container framed-golden-2 rpgui-content"
        style={{ height: "57vh" }}
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
    </div>
  );
}
