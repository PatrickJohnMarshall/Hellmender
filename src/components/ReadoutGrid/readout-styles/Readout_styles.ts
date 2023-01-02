import styled from "styled-components";

const GeneralButton = styled.button.attrs(() => ({
  className: "rpgui-button",
}))`
  && {
    min-width: 80px;
    max-width: 80px;

    min-height: 40px;
    max-height: 40px;

    margin-top: 0px;
    padding: 0px;
  }
`;

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

const HelpButton = styled(GeneralButton)`
  grid-row: 2;
  grid-column: 6;
  justify-self: end;
  align-self: center;
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

export {
  GeneralButton,

  /////Readout/////
  ReadoutShell,
  ReadoutBox,
  HelpButton,
};
