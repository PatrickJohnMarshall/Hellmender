import styled from "styled-components";

const PlayerStatBox = styled.div.attrs(() => ({
  className: "rpgui-container framed",
}))`
  && {
    height: 100% !important;
    width: 100%;
    overflow-y: auto;
  }
  grid-column: 3;
  overflow-wrap: anywhere;
`;

const PlayerStatGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
`;

const HealthGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 2fr 0.25fr 1fr 0.25fr;
`;

const LowerStatGrid = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
`;

export { PlayerStatBox, PlayerStatGrid, HealthGrid, LowerStatGrid };
