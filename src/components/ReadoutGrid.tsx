import React, { useState } from "react";
import "styles/_readout_grid.scss";
import "styles/_dropdown.scss";
import "styles/_containers_and_frames.scss";
import Weapons from "./Weapons";
import SpellRepertoire from "./SpellRepertoire";
import InfoBlocks from "./InfoBlocks";
import PlayerStatsReadout from "./PlayerStatsReadout";

function ReadoutGrid({ monsters, weapons, spells, playerStats }) {
  const [readout, setReadout] = useState<string>("Weapons");

  const options = ["Spells", "Weapons", "Apparel", "Potions", "Miscellaneous"];

  return (
    <div className="rpgui-container framed-golden" style={{ height: "513px" }}>
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
      <div className="readout-grid">
        {
          {
            Weapons: <Weapons weapons={weapons} />,
            Spells: <SpellRepertoire spells={spells} />,
          }[readout]
        }

        <PlayerStatsReadout playerStats={playerStats} />
        <InfoBlocks monsters={monsters} />
      </div>
    </div>
  );
}

export default ReadoutGrid;
