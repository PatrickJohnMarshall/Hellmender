import { useState } from "react";
import Weapons from "./Weapons";
import KeyItems from "./KeyItems";
import Apparel from "./Apparel";
import Potions from "./Potions";
import SpellRepertoire from "./SpellRepertoire";
import InfoBlocks from "./InfoBlocks";
import PlayerStatsReadout from "./PlayerStatsReadout";
import MonsterStats from "./MonsterStats";
import Monster from "monsters/types/Monster";
import InterfaceAudio from "audio/InterfaceAudio";

function ReadoutGrid({
  monsters,
  weapons,
  keyItems,
  spells,
  playerStats,
  setHelpToggle,
}) {
  const [readout, setReadout] = useState<string>("weapons");
  const [monsterStatReadout, setMonsterStatReadout] = useState<Monster | null>(
    null
  );
  const interfaceAudio = new InterfaceAudio();

  const options = [
    { text: "Weapons", value: "weapons" },
    { text: "Spells", value: "spells" },
    { text: "Apparel", value: "apparel" },
    { text: "Potions", value: "potions" },
    { text: "Key Items", value: "keyItems" },
  ];

  function optionSelect(option) {
    const renderOptions = {
      spells: <SpellRepertoire spells={spells} />,
      weapons: <Weapons weapons={weapons} />,
      apparel: <Apparel Apparel={[]} />,
      potions: <Potions Potions={[]} />,
      keyItems: <KeyItems keyItems={keyItems} />,
    };

    return renderOptions[option];
  }

  return (
    <div
      className="rpgui-container framed-golden index-grid"
      style={{ maxWidth: "75rem", marginLeft: "auto", marginRight: "auto" }}
    >
      <div style={{ gridRow: "1", gridColumn: "4 / 6", justifySelf: "end" }}>
        <button
          className="rpgui-button help-button"
          onClick={() => {
            setHelpToggle(true);
            interfaceAudio.playButton();
          }}
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
          onClick={() => interfaceAudio.playButton()}
          onChange={(selected) => {
            setReadout(selected.target.value);
            interfaceAudio.playButton();
          }}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
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
        {optionSelect(readout)}

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
