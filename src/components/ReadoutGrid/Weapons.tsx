import React, { useContext } from "react";
import "styles/_containers_and_frames.scss";
import "styles/_readout_box.scss";
import TerminalLogContext from "context/TerminalLog";
import getImageForItem from "util/getImageForItem";

function Weapons({ weapons }) {
  const terminalLog = useContext(TerminalLogContext);

  return (
    <div className="rpgui-container framed readout-box">
      Weapons:
      <div>
        {weapons.map((weapon) => {
          return (
            <button
              style={{
                backgroundImage: `url(${getImageForItem(weapon.getID())}
              )`,
                backgroundSize: "50px 50px",
                height: `50px`,
                width: "50px",
              }}
              onClick={() => {
                terminalLog.add("\n" + weapon.describe());
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Weapons;
