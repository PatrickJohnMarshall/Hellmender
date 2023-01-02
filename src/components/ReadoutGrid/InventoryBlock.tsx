import { useContext } from "react";
import { useState } from "react";
import TerminalLogContext from "context/TerminalLog";

import InterfaceAudio from "audio/InterfaceAudio";

import {
  InventorySelectorGrid,
  InventoryButton,
  InventoryBox,
  IconGrid,
  ItemIcon,
  BlankIcon,
} from "./readout-styles/InventoryBlock_styles";

function InventoryBlock({ spells, weapons, apparel, potions, keyItems }) {
  const interfaceAudio = new InterfaceAudio();
  const terminalLog = useContext(TerminalLogContext);
  const [readout, setReadout] = useState<string>("weapons");

  const options = [
    { selected: "weapons", value: weapons, text: "Weapons" },
    { selected: "spells", value: spells, text: "Spells" },
    { selected: "apparel", value: apparel, text: "Apparel" },
    { selected: "potions", value: potions, text: "Potions" },
    { selected: "keyItems", value: keyItems, text: "Key Items" },
  ];

  function buttonPrint(list) {
    let buttons = [];
    for (let i = 0; i < list.length; i++) {
      buttons.push(
        <InventoryButton
          rowNum={list[i + 1]}
          value={list[i].selected}
          onClick={(e) => {
            setReadout(e.target.value);
            interfaceAudio.playButton();
          }}
        >
          {list[i].text}
        </InventoryButton>
      );
    }
    return buttons;
  }

  const currentSelected = options.filter((sel) => {
    return sel.selected === readout;
  });

  const blankIcons = [];
  for (let i = 0; i < 9 - currentSelected[0].value.length; i++) {
    blankIcons.push(<BlankIcon />);
  }

  return (
    <InventoryBox>
      <InventorySelectorGrid>{buttonPrint(options)}</InventorySelectorGrid>
      <IconGrid>
        {currentSelected[0].value.map((item) => {
          return (
            <ItemIcon
              bgStyle={readout}
              icon={item}
              onClick={() => {
                terminalLog.add("\n" + item.describe());
                interfaceAudio.playButton();
              }}
            />
          );
        })}
        {blankIcons}
      </IconGrid>
    </InventoryBox>
  );
}

export default InventoryBlock;
