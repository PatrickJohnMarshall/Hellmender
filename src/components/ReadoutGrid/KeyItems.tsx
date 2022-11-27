import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import getImageForItem from "util/getImageForItem";
import InterfaceAudio from "audio/InterfaceAudio";

function KeyItems({ keyItems }) {
  const terminalLog = useContext(TerminalLogContext);
  const interfaceAudio = new InterfaceAudio();

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 1 }}
    >
      <div>Key Items: </div> <br />
      <div className="icon-grid">
        {keyItems.map((keyItem) => {
          return (
            <button
              style={{
                background: `url(https://i.imgur.com/YRXu3iB.png)
              `,
                backgroundRepeat: "no-repeat",
                backgroundSize: `800px`,
                backgroundPosition: `${getImageForItem(keyItem.getID())}`,
                display: "inline-block",
                height: `50px`,
                width: "50px",
              }}
              onClick={() => {
                terminalLog.add("\n" + keyItem.describe());
                interfaceAudio.playButton();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default KeyItems;
