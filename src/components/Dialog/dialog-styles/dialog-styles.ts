import styled from "styled-components";

export const DialogBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-golden-2",
}))`
  position: absolute;
  z-index: 9;
  width: 750px;
  height: 750px;
  text-align: center;
`;

export const DialogInnerBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  padding: 0 !important;
  display: grid;
  align-items: center;
  grid-template-rows: 5% 5% 47.5% 5% 34.5% 5%;
  grid-template-columns: 5% 32.5% 32.5% 2.5% 22.5% 5%;
`;

export const DialogTextBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  background: #252a33 !important;
  color: white;
  padding: 0 !important;
  grid-row: 2 / 4;
  grid-column: 2 / 4;
`;

export const DialogChoiceBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  background: #252a33 !important;
  color: white;
  padding: 0 !important;
  overflow-y: scroll;

  grid-row: 5 / 6;
  grid-column: 2 / 6;

  text-align: left;
`;

export const AnswerList = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Answer = styled.li`
  margin: 1em;

  &:hover {
    color: yellow;
  }
`;

export const TalkerBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  background: #252a33 !important;
  color: white;
  padding: 0 !important;

  grid-row: 3 / 4;
  grid-column: 5 / 6;
`;

export const QuitDialogButton = styled.button.attrs(() => ({
  className: "rpgui-button golden help-button",
}))`
  &&& {
    padding-bottom: 0.3em;
    vertical-align: top;
    height: 2.5em;
    width: 10em;
  }
  grid-column: 5 / 6;
  grid-row: 2 / 3;
  font-size: 18px;
`;
