import { useState } from "react";
import ReadoutGrid from "../ReadoutGrid";

import "styles/_scrollbars.scss";
import "styles/_hr.scss";
import "styles/_input.scss";

import { TerminalController } from "../TerminalController";
import TerminalLogContext from "../../context/TerminalLog";
import { TerminalOutput } from "../Terminal";

import HelpMenu from "components/ReadoutGrid/HelpMenu";
import getRoomItemDescriptions from "util/getRoomItemDescriptions";
import { GameState } from "state/GameState";

type Props = {
  setGameState: (state: "start" | "game" | "intro" | "saves") => void;
  state: GameState;
};

const GameEngine: React.FC<Props> = ({ setGameState, state }) => {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>{`${
      state.playerLocation.describe() +
      getRoomItemDescriptions(
        state.playerLocation.getID(),
        state.items.activeItems
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
            playerAction={state.playerAction}
            allItems={state.items.activeItems}
            itemsInRoom={{
              keyItems: state.items.activeItems.getKeyItemsForRoom(
                state.playerLocation.getID()
              ),
              weapons: state.items.activeItems.getWeaponsForRoom(
                state.playerLocation.getID()
              ),
            }}
            monsters={state.monsters.getMonstersForRoom(
              state.playerLocation.getID()
            )}
          />
        )}
        <ReadoutGrid
          playerStats={state.playerStats}
          monsters={state.monsters.getMonstersForRoom(
            state.playerLocation.getID()
          )}
          weapons={state.playerInventory.getWeapons()}
          keyItems={state.playerInventory.getKeyItems()}
          spells={state.playerInventory.getSpells()}
          setHelpToggle={setHelpToggle}
        />
      </div>
    </TerminalLogContext.Provider>
  );
};

export default GameEngine;
