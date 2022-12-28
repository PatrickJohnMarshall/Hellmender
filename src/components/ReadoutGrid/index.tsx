import { useState } from "react";
import InventoryBlock from "./InventoryBlock";
import InfoBlocks from "./InfoBlocks";
import PlayerStatsReadout from "./PlayerStatsReadout";
import MonsterStats from "./MonsterStats";
import Monster from "monsters/types/Monster";
import InterfaceAudio from "audio/InterfaceAudio";

import { ReadoutShell, ReadoutBox, HelpButton } from "./readoutStyles";

function ReadoutGrid({
  monsters,
  weapons,
  keyItems,
  spells,
  playerStats,
  setHelpToggle,
}) {
  const [monsterStatReadout, setMonsterStatReadout] = useState<Monster | null>(
    null
  );
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
      </ReadoutBox>
    </ReadoutShell>
  );
}

export default ReadoutGrid;
