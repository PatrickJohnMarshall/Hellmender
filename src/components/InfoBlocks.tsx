import React, { useContext } from "react";
import "../styles/_containers_and_frames.scss";
import TerminalLogContext from "context/TerminalLog";
import getImageForMonster from "util/getImageForMonster";

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
            style={{
              backgroundImage: `url(${getImageForMonster(monster.getID())})`,
              backgroundSize: "50px 50px",
              height: `50px`,
              width: "50px",
            }}
            onClick={() => {
              terminalLog.add("\n" + monster.describe());
            }}
          >
            {/* {monster.getName()} */}
          </button>
        );
      })}
    </div>
  );
}

export default InfoBlocks;
