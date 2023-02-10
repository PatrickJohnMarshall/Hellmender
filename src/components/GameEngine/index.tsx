import { useState } from "react";
import ReadoutGrid from "../ReadoutGrid";

import "styles/_scrollbars.scss";
import "styles/_hr.scss";
import "styles/_input.scss";

import { TerminalController } from "../TerminalController";
import TerminalLogContext from "../../context/TerminalLog";
import { TerminalOutput } from "../Terminal";

import { GameState } from "state/GameState";

import HelpMenu from "components/ReadoutGrid/HelpMenu";
import getRoomItemDescriptions from "util/getRoomItemDescriptions";

const State = new GameState();

function GameEngine({ setGameState }) {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>{`${
      State.playerLocation.describe() +
      getRoomItemDescriptions(
        State.playerLocation.getID(),
        State.items.activeItems
      )
    }`}</TerminalOutput>,
  ]);

  const [helpToggle, setHelpToggle] = useState<boolean>(false);

  return (
    <TerminalLogContext.Provider
      value={{
        terminalLog,
        add: (newLine: string) => {
          setTerminalLog(
            terminalLog.concat([
              <TerminalOutput>{`${newLine}`}</TerminalOutput>,
            ])
          );
        },
      }}
    >
      <div
        className="container rpgui-container rpgui-content framed-grey"
        style={{
          height: "100vh",
        }}
      >
        {helpToggle ? (
          <HelpMenu setHelpToggle={setHelpToggle} />
        ) : (
          <TerminalController
            setGameState={setGameState}
            playerAction={State.playerAction}
            allItems={State.items.activeItems}
            itemsInRoom={{
              keyItems: State.items.activeItems.getKeyItemsForRoom(
                State.playerLocation.getID()
              ),
              weapons: State.items.activeItems.getWeaponsForRoom(
                State.playerLocation.getID()
              ),
            }}
            monsters={State.monsters.getMonstersForRoom(
              State.playerLocation.getID()
            )}
          />
        )}
        <ReadoutGrid
          playerStats={State.playerStats}
          monsters={State.monsters.getMonstersForRoom(
            State.playerLocation.getID()
          )}
          weapons={State.playerInventory.getWeapons()}
          keyItems={State.playerInventory.getKeyItems()}
          spells={State.playerInventory.getSpells()}
          setHelpToggle={setHelpToggle}
        />
      </div>
    </TerminalLogContext.Provider>
  );
}

export default GameEngine;
