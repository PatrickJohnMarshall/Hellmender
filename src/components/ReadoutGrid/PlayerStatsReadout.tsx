import React from "react";
import "styles/_scrollbars.scss";
import "styles/_containers_and_frames.scss";
import "styles/_readout_box.scss";

function PlayerStatsReadout({ playerStats }) {
  return (
    <div
      className="rpgui-container framed rpgui-content readout-box"
      style={{
        gridColumn: 3,
      }}
    >
      Stats: <br />
      Strength:{playerStats.getAttributes().str} <br />
      Dexterity:{playerStats.getAttributes().dex} <br />
      Constitution:{playerStats.getAttributes().con} <br />
      Intelligence:{playerStats.getAttributes().int} <br />
      Wisdom:{playerStats.getAttributes().wis} <br />
      Charisma:{playerStats.getAttributes().cha} <br />
      HP:{playerStats.getHP()} <br />
      AC:{playerStats.getAC()}
    </div>
  );
}

export default PlayerStatsReadout;
