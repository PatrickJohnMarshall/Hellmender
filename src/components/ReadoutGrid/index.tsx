import InventoryBlock from "./InventoryBlock";
import InfoBlocks from "./InfoBlocks";
import PlayerStatsReadout from "./PlayerStatsReadout";
import InterfaceAudio from "audio/InterfaceAudio";

import { ReadoutShell, ReadoutBox, HelpButton } from "./styles/Readout_styles";

function ReadoutGrid({
  monsters,
  weapons,
  keyItems,
  spells,
  playerStats,
  setHelpToggle,
}) {
  const interfaceAudio = new InterfaceAudio();

  return (
    <ReadoutShell>
      <HelpButton
        onClick={() => {
          setHelpToggle(true);
          interfaceAudio.playButton();
        }}
      >
        Help
      </HelpButton>

      <ReadoutBox>
        <InventoryBlock
          spells={spells}
          weapons={weapons}
          apparel={[]}
          potions={[]}
          keyItems={keyItems}
        />

        <PlayerStatsReadout playerStats={playerStats} />

        <InfoBlocks monsters={monsters} />
      </ReadoutBox>
    </ReadoutShell>
  );
}

export default ReadoutGrid;
