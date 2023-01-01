import StatBar from "./StatBar";
import {
  HealthGrid,
  PlayerStatBox,
  PlayerStatGrid,
  LowerStatGrid,
} from "./styles/PlayerStats_styles";

function PlayerStatsReadout({ playerStats }) {
  return (
    <PlayerStatBox>
      <PlayerStatGrid>
        <HealthGrid>
          <StatBar entity={playerStats} statType="health" />
          <StatBar entity={playerStats} statType="mana" />
          <div style={{ gridRow: 4, justifySelf: "center" }}>
            AC: {playerStats.getAC()}
          </div>
        </HealthGrid>
        <LowerStatGrid></LowerStatGrid>
      </PlayerStatGrid>
    </PlayerStatBox>
  );
}

export default PlayerStatsReadout;
