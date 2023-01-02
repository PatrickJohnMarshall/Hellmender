import {
  StatBarShell,
  StatBarGlass,
  StatReadout,
  StatBarFluid,
} from "./readout-styles/StatBar_styles";

function StatBar({ entity, statType }) {
  let entityMortality;
  let curVal = "";
  let maxVal = "";

  if (statType === "health") {
    curVal = entity.getHP();
    maxVal = entity.getMaxHP();
    entityMortality = entity.getHP() > 0;
  }

  if (statType === "mana") {
    curVal = entity.getMana();
    maxVal = entity.getMaxMana();
  }

  const statBackgrounds = { health: `rgb(211, 69, 73)`, mana: "blue" };

  const statReadouts = {
    health: !entityMortality ? "Dead" : `HP: ${curVal}`,
    mana: `Mana: ${curVal}`,
  };

  return (
    <StatBarShell>
      <StatBarGlass>
        <StatReadout>{statReadouts[statType]}</StatReadout>
        <StatBarFluid
          curVal={curVal}
          maxVal={maxVal}
          bgColor={statBackgrounds[statType]}
        ></StatBarFluid>
      </StatBarGlass>
    </StatBarShell>
  );
}

export default StatBar;
