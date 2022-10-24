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
      Stats:
      <div>Strength:{playerStats.getAttributes().str}</div>
      <div>Dexterity:{playerStats.getAttributes().dex}</div>
      <div>Constitution:{playerStats.getAttributes().con}</div>
      <div>Intelligence:{playerStats.getAttributes().int}</div>
      <div>Wisdom:{playerStats.getAttributes().wis}</div>
      <div>Charisma:{playerStats.getAttributes().cha}</div>
      <div>HP:{playerStats.getHP()}</div>
      <div>AC:{playerStats.getAC()}</div>
    </div>
  );
}

export default PlayerStatsReadout;
