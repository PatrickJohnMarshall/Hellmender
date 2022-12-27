import styled, { keyframes } from "styled-components";

const IntroScreen = styled.div.attrs(() => ({
  className: "rpgui-content rpgui-container framed-grey",
}))`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-golden-2",
}))`
  height: 705px;
  width: 855px;
`;

const IntroBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  width: 100%;
  padding: 0 !important;
  display: grid;
  align-items: center;
  grid-template-rows: 85% 1fr;
  grid-template-columns: 20% 20% 20% 20% 20%;
  font-size: 22px;
  letter-spacing: 2px;
`;

const IntroShellText = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 100%;
  background: #252a33 !important;
  padding: 26px !important;
  color: white;
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  grid-template-rows: 4% ${(props) => `repeat(${props.textLength}, 1fr)`} 4%;
  align-items: center;
`;

const PageBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-golden-2",
}))`
  grid-column: 3;
  grid-row: 2;
  height: 75px;
  width: 100px;
  justify-self: center;
  text-align: center;
`;

const BackButton = styled.button.attrs(() => ({
  className: "rpgui-button golden help-button",
}))`
  grid-column: 2;
  grid-row: 2;
  font-size: 18px;
  justify-self: flex-end;
`;

const ForwardButton = styled.button.attrs(() => ({
  className: "rpgui-button golden help-button",
}))`
  grid-column: 4;
  grid-row: 2;
  font-size: 18px;
`;

const TextBlock = styled.p`
  grid-row: ${(props) => props.row};
`;

const NameInput = styled.input`
  && {
    width: 7em;
    color: red;
    text-align: center;
    padding: 0;
  }
`;

const NameSubmit = styled.input`
  && {
    width: 5em;
    padding: 0;
  }
`;

const TextDiv = styled.div`
  grid-row: ${(props) => props.row};
  font-size: 18px;
`;

const FakeAcceptButton = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  && {
    background: black;
    background-color: black;
    text-align: center;
    width: 6em;
    height: 3em;
  }
`;

const shinyBlink = keyframes`
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
`;

const TM = styled.sup`
  && {
    font-size: 14px;
    vertical-align: super;
    color: gold;
    letter-spacing: 1px;
    padding-right: 5px;
    animation: 1s ${shinyBlink} infinite alternate;
  }
`;

const FancySpan = styled.span`
  && {
    color: red;
    margin: 0px 8px;
  }
`;

export {
  IntroScreen,
  IntroShell,
  IntroBox,
  IntroShellText,
  PageBox,
  BackButton,
  ForwardButton,
  TextBlock,
  NameInput,
  NameSubmit,
  TextDiv,
  FakeAcceptButton,
  TM,
  FancySpan,
};
