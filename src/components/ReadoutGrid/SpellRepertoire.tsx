import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import getImageForSpell from "util/getImageForSpell";
import InterfaceAudio from "audio/InterfaceAudio";

function SpellRepertoire({ spells }) {
  const terminalLog = useContext(TerminalLogContext);
  const interfaceAudio = new InterfaceAudio();

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 1 }}
    >
      <div>Spell Repertoire:</div> <br />
      <div className="icon-grid">
        {spells.map((spell) => {
          return (
            <button
              style={{
                backgroundImage: `url(${getImageForSpell(spell.getID())})`,
                backgroundSize: "50px 50px",
                height: `50px`,
                width: "50px",
              }}
              onClick={() => {
                terminalLog.add("\n" + spell.describe());
                interfaceAudio.playButton();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpellRepertoire;
