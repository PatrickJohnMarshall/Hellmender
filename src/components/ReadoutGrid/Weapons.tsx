import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import getImageForItem from "util/getImageForItem";
import InterfaceAudio from "audio/InterfaceAudio";

function Weapons({ weapons }) {
  const terminalLog = useContext(TerminalLogContext);
  const interfaceAudio = new InterfaceAudio();

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 1 }}
    >
      <div>Weapons: </div> <br />
      <div className="icon-grid">
        {weapons.map((weapon) => {
          return (
            <button
              style={{
                background: `url(https://i.imgur.com/YRXu3iB.png)
              `,
                backgroundRepeat: "no-repeat",
                backgroundSize: `800px`,
                backgroundPosition: `${getImageForItem(weapon.getID())}`,
                display: "inline-block",
                height: `50px`,
                width: "50px",
              }}
              onClick={() => {
                terminalLog.add("\n" + weapon.describe());
                interfaceAudio.playButton();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Weapons;
