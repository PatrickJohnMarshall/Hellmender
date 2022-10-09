import React, { useContext } from "react";
import "../styles/_containers_and_frames.scss";
import TerminalLogContext from "context/TerminalLog";

function Inventory({ weapons }) {
  const terminalLog = useContext(TerminalLogContext);

  return (
    <div
      className="rpgui-container framed"
      style={{ height: "350px", width: "375px", marginTop: "50px" }}
    >
      Inventory:
      {weapons.map((weapon) => {
        return (
          <button
            style={{
              backgroundImage: `url(https://i.imgur.com/hkA2Su1.png)`,
              backgroundSize: "50px 50px",
              height: `50px`,
              width: "50px",
            }}
            onClick={() => {
              terminalLog.add("\n" + weapon.describe());
            }}
          >
            {/* {weapon.getName()} */}
          </button>
        );
      })}
    </div>
  );
}

export default Inventory;
