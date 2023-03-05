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
  grid-template-rows: 5% 52.5% 5% 34.5% 5%;
  grid-template-columns: 5% 32.5% 32.5% 2.5% 20% 2.5% 5%;
`;

export const DialogTextBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  background: #252a33 !important;
  color: white;
  padding: 0 !important;
  grid-row: 2 / 3;
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

  grid-row: 4 / 5;
  grid-column: 2 / 7;

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
  height: 300px;
  width: 150px;
  background: #252a33 !important;
  color: white;
  padding: 0 !important;
  grid-row: 2 / 3;
  grid-column: 5 / 6;
`;
