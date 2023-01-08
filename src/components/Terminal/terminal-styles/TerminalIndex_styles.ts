import styled, { keyframes } from "styled-components";
import img from "./images/border-grey.png";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const TerminalWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  height: 100%;
  background: #252a33;
  color: #eee;
  font-size: 18px;
  font-family: "Fira Mono", Consolas, Menlo, Monaco, "Courier New", Courier,
    monospace;
  border-radius: 4px;
  padding: 45px 45px 45px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  border-style: solid;
  border-image-source: url(${img});
  border-image-repeat: repeat;
  border-image-slice: 3 3 3 3;
  border-image-width: 7px;
  border-width: 7px;

  &:after {
    content: "HELLMENDER";
    position: absolute;
    color: #a2a2a2;
    top: 5px;
    left: 0;
    width: 100%;
    text-align: center;
  }

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

const TerminalComp = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
`;

const ReactTerminalInput = styled.div`
  width: -moz-fot-content;
  width: fit-content;
  white-space: pre-line;
  hyphens: auto;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    color: #a2a2a2;
  }

  &:before {
    margin-right: 0.75em;
    content: ">";
  }
`;

const ReactTerminalOutput = styled.div`
  width: -moz-fot-content;
  width: fit-content;
  white-space: pre-line;
  hyphens: auto;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    color: #a2a2a2;
  }
`;

const ReactTerminalLine = styled.div`
  width: -moz-fot-content;
  width: fit-content;
  white-space: pre-line;
  hyphens: auto;

  &:before {
    margin-right: 0.75em;
    content: ">";
  }

  ${TerminalWrapper}:focus-within & {
    &:after {
      content: "▋";
      font-family: monospace;
      margin-left: 0.2em;
      -webkit-animation: ${blink} 1s infinite;
      animation: ${blink} 1s infinite;
    }
  }
`;

const TerminalHiddenInput = styled.input`
  position: fixed;
  z-index: -1;
  opacity: 0;
`;

export {
  TerminalWrapper,
  TerminalComp,
  ReactTerminalInput,
  ReactTerminalOutput,
  ReactTerminalLine,
  TerminalHiddenInput,
};
