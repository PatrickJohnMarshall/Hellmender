import React, { useContext } from "react";
import "styles/_containers_and_frames.scss";
import "styles/_readout_box.scss";
import "styles/_icon_grid.scss";
import TerminalLogContext from "context/TerminalLog";
import getImageForMonster from "util/getImageForMonster";

function InfoBlocks({ monsters }) {
  const terminalLog = useContext(TerminalLogContext);

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 5 }}
    >
      <div>Monsters In Area:</div> <br />
      <div className="icon-grid">
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default InfoBlocks;
