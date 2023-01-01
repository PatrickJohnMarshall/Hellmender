import styled from "styled-components";

const HelpShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-golden-2",
}))`
  height: 57vh;
  max-width: 75rem;
  overflow-wrap: break-word;
  margin-left: auto;
  margin-right: auto;
`;

const HelpBox = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey rpgui-content",
}))`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-size: 18px;
  background: #252a33;
  color: white;
`;

export { HelpShell, HelpBox };
