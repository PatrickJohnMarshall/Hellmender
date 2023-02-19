import styled from "styled-components";

export const SaveScreen = styled.div.attrs(() => ({
  className: "rpgui-content rpgui-container framed-grey",
}))`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 705px;
  width: 855px;
  display: grid;
  background: #252a33 !important;
  grid-template-rows: 15% 1fr;
`;

export const BackButton = styled.button.attrs(() => ({
  className: "rpgui-button golden help-button",
}))`
  font-size: 18px;
  grid-column: 1;
  padding-bottom: 5px;
`;

export const TitleText = styled.div`
  grid-column: 2;
  text-align: center;
`;

export const TitleBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
    grid-row: 1
  height: 100%;
  width: 100%;
  padding: 0 !important;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  align-items: center;
  font-size: 22px;
  letter-spacing: 2px;
`;

export const SaveSlotBox = styled.div`
  grid-row: 2;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
`;
