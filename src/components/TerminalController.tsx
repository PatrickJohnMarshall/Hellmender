import React, { useContext } from "react";
import TerminalLogContext from "../context/TerminalLog";
import Terminal from "./Terminal";
import TextOutput from "text-output/TextOutput";
import PlayerActionAudio from "audio/PlayerActionAudio";

export function TerminalController({
  playerAction,
  monsters,
  items,
  setGameState,
}) {
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
          const actionResult = playerAction.action({
            answer: terminalInput,
            validMonsters: [...monsters],
          });

          const playerActionAudio = new PlayerActionAudio(actionResult);
          playerActionAudio.play();

          function roomItemDescriptions() {
            return actionResult.event === "MOVE" || "LOOK"
              ? items
                  .getKeyItemsForRoom(actionResult.eventData.location)
                  .reduce(
                    (finalDesc, keyItem) =>
                      finalDesc + "\n" + keyItem.inLocationDescription(),
                    ""
                  )
              : "";
          }

          const textOutput = new TextOutput(actionResult);

          if (textOutput.getText() === "quit") {
            setGameState("start");
          }

          const output =
            `\n>` +
            terminalInput +
            `\n\n` +
            textOutput.getText() +
            roomItemDescriptions();

          terminalLogContext.add(output);
        }}
      >
        {terminalLogContext.terminalLog}
      </Terminal>
    </div>
  );
}
