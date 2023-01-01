import styled from "styled-components";
import getImageForItem from "util/getImageForItem";
import getImageForSpell from "util/getImageForSpell";

const ReadoutShell = styled.div.attrs(() => ({
  className: "rpgui-content rpgui-container framed-golden",
}))`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  height: 40vh;
  grid-template-columns: 5% 7fr 0.5fr 7fr 0.5fr 7fr 5%;
  grid-template-rows: 5% 3em 1fr 5%;
`;

const HelpButton = styled.button.attrs(() => ({
  className: "rpgui-button",
}))`
  && {
    grid-row: 2;
    grid-column: 6;
    justify-self: end;
    align-self: center;

    min-height: 40px;
    min-width: 80px;
    max-height: 40px;
    max-width: 80px;
    margin-top: 0px;
    padding: 0px;
  }
`;

const ReadoutBox = styled.div`
  display: grid;
  grid-template-columns: 7fr 0.5fr 7fr 0.5fr 7fr;
  color: white;

  z-index: 2;

  grid-row: 3;
  grid-column: 2 / 7;
  overflow-y: auto;
`;

/////Inventory Block/////
const InventorySelectorGrid = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  overflow: hidden;
  align-content: center;
  justify-self: center;

  &&& {
    padding: 0;
    margin-top: -0.1em;
    z-index: 1;
  }

  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  color: white;
`;

const InventoryButton = styled.button.attrs(() => ({
  className: "rpgui-button golden",
}))`
  && {
    grid-column: ${(props) => props.rowNum};
    font-size: 12px;

    align-self: top;
    min-width: 52px;
    max-width: 52px;
    min-height: 40px;
    max-height: 40px;
    padding: 0px;
  }
`;

const InventoryBox = styled.div.attrs(() => ({
  className: "rpgui-container framed",
}))`
  && {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  gridcolumn: 1;
`;

const IconGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 84%;
  width: 100%;
  grid-template-columns: repeat(3, minmax(50px, 6em));
  grid-auto-rows: auto;
  row-gap: 0.1em;
`;

const ItemIcon = styled.button`
  background: ${(props) =>
    props.bgStyle === "spells"
      ? `url(${getImageForSpell(props.icon.getID())})`
      : `url(https://i.imgur.com/YRXu3iB.png)`};

  background-repeat: no-repeat;

  background-size: ${(props) =>
    props.bgStyle === "spells" ? `50px 50px` : `800px`};

  background-position: ${(props) =>
    props.bgStyle === "spells"
      ? "100%"
      : `${getImageForItem(props.icon.getID())}`};

  display: inline-block;
  height: 50px;
  width: 50px;
`;

const BlankIcon = styled.div`
  background: url(https://i.imgur.com/YRXu3iB.png);
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: ${getImageForItem("blank")};
  display: inline-block;
  height: 50px;
  width: 50px;
  outline: 2px solid black;
  outline-offset: -2px;
`;

export {
  ReadoutShell,
  ReadoutBox,
  HelpButton,
  InventoryButton,
  /////Inventory Block/////
  InventorySelectorGrid,
  InventoryBox,
  IconGrid,
  ItemIcon,
  BlankIcon,
};
