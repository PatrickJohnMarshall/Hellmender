import { useState } from "react";
import ReadoutGrid from "../ReadoutGrid";
import "styles/_containers_and_frames.scss";
import "styles/_scrollbars.scss";
import "styles/_health_bar.scss";
import "styles/_hr.scss";

import "styles/_readout_box.scss";

import "styles/_dropdown.scss";
import "styles/_custom_buttons.scss";
import "styles/_button.scss";

import "styles/_custom_grids.scss";

import { TerminalController } from "../TerminalController";
import TerminalLogContext from "../../context/TerminalLog";
import { TerminalOutput } from "../Terminal";

import buildLayout from "../../tower-layout/buildLayout";
import generateMonsters from "../../monsters/generateMonsters";

import Fist from "../../items/weapons/Fist";
import FireBolt from "spells/spells/FireBolt";

import PlayerAction from "../../player/PlayerAction";
import PlayerLocation from "../../player/PlayerLocation";
import PlayerInventory from "../../player/PlayerInventory";
import PlayerStats from "player/PlayerStats";
import HelpMenu from "components/ReadoutGrid/HelpMenu";

const startingRoom = buildLayout();
const startingItem = new Fist();
const startingSpell = new FireBolt();

const playerLocation = new PlayerLocation(startingRoom);
const playerInventory = new PlayerInventory(startingItem);
const playerStats = new PlayerStats({
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  mana: 10,
  hp: 10,
  ac: 10,
});
const playerAction = new PlayerAction(
  playerLocation,
  playerInventory,
  playerStats
);

playerInventory.learnSpell(startingSpell);
const monsters = generateMonsters();

function GameEngine({ setGameState }) {
  const [terminalLog, setTerminalLog] = useState([
    <TerminalOutput>{`${playerLocation.describe()}`}</TerminalOutput>,
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
        style={{ height: "100vh" }}
      >
        {helpToggle ? (
          <HelpMenu setHelpToggle={setHelpToggle} />
        ) : (
          <TerminalController
            setGameState={setGameState}
            playerAction={playerAction}
            monsters={monsters.getMonstersForRoom(playerLocation.getID())}
          />
        )}
        <ReadoutGrid
          playerStats={playerStats}
          monsters={monsters.getMonstersForRoom(playerLocation.getID())}
          weapons={playerInventory.getWeapons()}
          spells={playerInventory.getSpells()}
          setHelpToggle={setHelpToggle}
        />
      </div>
    </TerminalLogContext.Provider>
  );
}

export default GameEngine;
