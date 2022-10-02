import React, { useContext } from "react";
import "../styles/_containers_and_frames.scss";
import TerminalLogContext from "context/TerminalLog";

function InfoBlocks({ monsters }) {
  const terminalLog = useContext(TerminalLogContext);

  return (
    <div
      className="rpgui-container framed"
      style={{ height: "375px", width: "375px", marginTop: "35px" }}
    >
      InfoBlocks:
      {monsters.map((monster) => {
        return (
          <button
            onClick={() => {
              terminalLog.add("\n" + monster.describe());
            }}
          >
            {monster.getName()}
          </button>
        );
      })}
    </div>
  );
}

export default InfoBlocks;
