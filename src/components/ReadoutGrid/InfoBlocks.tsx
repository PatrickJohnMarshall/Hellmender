import { useContext } from "react";
import TerminalLogContext from "context/TerminalLog";
import InterfaceAudio from "audio/InterfaceAudio";
import StatBar from "./StatBar";
import {
  InfoBlockShell,
  MonsterPartShell,
  MonsterIconGrid,
  MonsterIconShell,
  MonsterIcon,
  MonsterName,
  MonsterHPShell,
} from "./styles/InfoBlocks_styles";

function InfoBlocks({ monsters }) {
  const interfaceAudio = new InterfaceAudio();
  const terminalLog = useContext(TerminalLogContext);

  return (
    <InfoBlockShell>
      <div style={{ gridRow: 1 }}>Entities In Room:</div> <br />
      <MonsterIconGrid>
        {monsters.map((monster) => {
          return (
            <MonsterIconShell>
              <MonsterPartShell>
                <MonsterIcon icon={monster} />
              </MonsterPartShell>
              <MonsterPartShell>
                <label>Describe:</label>
                <MonsterName
                  onClick={() => {
                    terminalLog.add("\n" + monster.describe());
                    interfaceAudio.playButton();
                  }}
                >
                  {monster.getName()}
                </MonsterName>
              </MonsterPartShell>

              <MonsterHPShell>
                <StatBar entity={monster} statType={`health`} />
              </MonsterHPShell>
            </MonsterIconShell>
          );
        })}
      </MonsterIconGrid>
    </InfoBlockShell>
  );
}

export default InfoBlocks;
