import React, { useContext } from "react";
import "styles/_containers_and_frames.scss";
import "styles/_readout_box.scss";
import TerminalLogContext from "context/TerminalLog";
import getImageForSpell from "util/getImageForSpell";

function SpellRepertoire({ spells }) {
  const terminalLog = useContext(TerminalLogContext);

  return (
    <div className="rpgui-container framed readout-box">
      Spell Repertoire:
      <div>
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
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpellRepertoire;
