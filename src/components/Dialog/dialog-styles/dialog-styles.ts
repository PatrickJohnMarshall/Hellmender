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
  width: 150px;
  height: 150px;
  text-align: center;
`;
