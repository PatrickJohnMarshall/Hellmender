import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import "styles/_input.scss";

function MonsterStats({ monsters, monsterStatReadout, setMonsterStatReadout }) {
  const terminalLog = useContext(TerminalLogContext);
  const monster = monsterStatReadout;

  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 5, padding: `3px` }}
    >
      <div
        className="rpgui-container framed-grey"
        style={{
          height: "100%",
          width: "100%",
          overflowY: "auto",
          padding: "6px",
        }}
      >
        <div
          className="rpgui-content"
          style={{
            display: "grid",
            gridTemplateColumns: `1fr`,
            gridTemplateRows: "1fr 0.25fr 0.5fr 0.5fr 0.5fr 0.5fr",
            rowGap: `0.25em`,
          }}
        >
          <button
            className="rpgui-button monster-stat-button"
            onClick={() => setMonsterStatReadout(null)}
          >
            Back
          </button>
          <hr style={{ width: `100%`, marginBottom: 0, margin: 0 }} />

          <label>[{monster.getName()}]'s HP:</label>
          <div className="health-bar">
            <div className="health-bar-glass-before"></div>
            <div className="health-bar-glass" style={{ textAlign: "center" }}>
              <span
                style={{
                  gridColumn: 2,
                  position: "absolute",
                  marginLeft: "-8px",
                }}
              >
                {monster.getHP()}
              </span>
              <div
                className="health-bar-fluid"
                style={{
                  width: `${(monster.getHP() / monster.getMaxHP()) * 100}%`,
                }}
              ></div>
            </div>
            <div className="health-bar-glass-after"></div>
          </div>
          <hr style={{ width: `100%`, marginBottom: 0 }} />
          <div>AC: {monster.getAC()}</div>
          <hr style={{ width: `100%`, marginBottom: 0 }} />
          <button
            className="rpgui-button monster-describe-button"
            onClick={() => {
              terminalLog.add("\n" + monster.describe());
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
