import styled from "styled-components";

export const DialogBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-golden-2",
}))`
  position: absolute;
  /* &&& {
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
  } */
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
  grid-template-rows: 85% 1fr;
  grid-template-columns: 20% 20% 20% 20% 20%;
  font-size: 22px;
  letter-spacing: 2px;
`;
