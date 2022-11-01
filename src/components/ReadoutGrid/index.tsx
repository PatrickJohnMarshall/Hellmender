import { useState } from "react";
import Weapons from "./Weapons";
import SpellRepertoire from "./SpellRepertoire";
import InfoBlocks from "./InfoBlocks";
import PlayerStatsReadout from "./PlayerStatsReadout";
import MonsterStats from "./MonsterStats";
import Monster from "monsters/types/Monster";

function ReadoutGrid({
  monsters,
  weapons,
  spells,
  playerStats,
  setHelpToggle,
}) {
  const [readout, setReadout] = useState<string>("Weapons");
  const [monsterStatReadout, setMonsterStatReadout] = useState<Monster | null>(
    null
  );

  const options = ["Spells", "Weapons", "Apparel", "Potions", "Misc"];

  return (
    <div
      className="rpgui-container framed-golden index-grid"
      style={{ maxWidth: "75rem", marginLeft: "auto", marginRight: "auto" }}
    >
      <div style={{ gridRow: "1", gridColumn: "4 / 6", justifySelf: "end" }}>
        <button
          className="rpgui-button help-button"
          onClick={() => setHelpToggle(true)}
        >
          Help
        </button>
      </div>

      <div style={{ gridRow: `1`, gridColumn: "2 / 5" }}>
        <label className="dropdown-label" htmlFor="options">
          Select Inventory:
        </label>
        <select
          className="rpgui-dropdown"
          value={readout}
          onChange={(selected) => setReadout(selected.target.value)}
        >
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div
        className="readout-grid"
        style={{
          gridRow: `2`,
          gridColumn: `2 / 6`,
          overflowY: "auto",
        }}
      >
        {
          {
            Weapons: <Weapons weapons={weapons} />,
            Spells: <SpellRepertoire spells={spells} />,
          }[readout]
        }

        <PlayerStatsReadout playerStats={playerStats} />

        {monsterStatReadout ? (
          <MonsterStats
            monsters={monsters}
            monsterStatReadout={monsterStatReadout}
            setMonsterStatReadout={setMonsterStatReadout}
          />
        ) : (
          <InfoBlocks
            setMonsterStatReadout={setMonsterStatReadout}
            monsters={monsters}
          />
        )}
      </div>
    </div>
  );
}

export default ReadoutGrid;
