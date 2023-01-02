import styled from "styled-components";
import getImageForMonster from "util/getImageForMonster";

const InfoBlockShell = styled.div.attrs(() => ({
  className: "rpgui-container framed",
}))`
  grid-column: 5;
`;

const MonsterIconGrid = styled.div`
  grid-row: 2;

  height: 85%;
  width: 100%;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-rows: 135px;
  row-gap: 0.1em;
`;

const MonsterIconShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 132px;
  width: 200px;

  && {
    padding: 0;
  }

  display: grid;
  grid-template-columns: 63px 1fr;
  grid-template-rows: 63px 1fr;
  align-items: center;
  justify-items: center;
`;

const MonsterPartShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  &&& {
    display: grid;
    padding: 0;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
  }
`;

const MonsterIcon = styled.div`
  background: ${(props) => `url( ${getImageForMonster(props.icon.getID())} )`};
  background-repeat: no-repeat;
  background-size: 50px 50px;

  outline: 2px solid black;
  outline-offset: -2px;

  display: inline-block;
  height: 50px;
  width: 50px;
`;

const MonsterName = styled.button.attrs(() => ({
  className: "rpgui-button golden",
}))`
  && {
    min-height: 30px;
    min-width: 80px;
    max-height: 30px;
    max-width: 80px;
    margin-top: 0px;
    padding: 0px;
  }
`;

const MonsterHPShell = styled.div`
  && {
    grid-column: 1 / 3;

    min-height: 1.8em;
    width: 98%;
    display: table-cell;
    vertical-align: middle;
  }
`;

export {
  InfoBlockShell,
  MonsterPartShell,
  MonsterIconGrid,
  MonsterIconShell,
  MonsterIcon,
  MonsterName,
  MonsterHPShell,
};
