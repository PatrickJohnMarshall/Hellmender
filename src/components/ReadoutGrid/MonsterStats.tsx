import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import HealthBar from "./HealthBar";
import InterfaceAudio from "audio/InterfaceAudio";
import "styles/_input.scss";

function MonsterStats({ monsters, monsterStatReadout, setMonsterStatReadout }) {
  const terminalLog = useContext(TerminalLogContext);
  const monster = monsterStatReadout;
  const interfaceAudio = new InterfaceAudio();

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 5, padding: `3px` }}
    >
      <div className="rpgui-container framed-grey monster-frame">
        <div className="rpgui-content monster-stat-grid">
          <button
            className="rpgui-button monster-stat-button"
            onClick={() => {
              setMonsterStatReadout(null);
              interfaceAudio.playButton();
            }}
          >
            Back
          </button>
          <hr style={{ width: `100%`, marginBottom: 0, margin: 0 }} />

          <label>[{monster.getName()}]:</label>
          <HealthBar entity={monster} />
          <hr style={{ width: `100%`, marginBottom: 0 }} />

          <div>AC: {monster.getAC()}</div>
          <hr style={{ width: `100%`, marginBottom: 0 }} />

          <button
            className="rpgui-button monster-describe-button"
            onClick={() => {
              terminalLog.add("\n" + monster.describe());
              interfaceAudio.playButton();
            }}
          >
            Describe
          </button>
        </div>
      </div>
    </div>
  );
}

export default MonsterStats;
