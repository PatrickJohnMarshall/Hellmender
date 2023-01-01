import styled from "styled-components";

const StatBarShell = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  position: relative;
  margin-right: 4px;
  font-size: 24px !important;
`;

const StatBarGlass = styled.div`
  position: absolute;
  text-align: center;
  grid-column: 1;
  display: table;
  width: 100%;
  height: 25px;
  border: 2px solid #000000;
  box-shadow: inset 0 0 0 2px #dbd75d;
`;

const StatReadout = styled.span`
  display: table-cell;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
`;

const StatBarFluid = styled.div`
  width: ${(props) => (props.curVal / props.maxVal) * 100}%;
  height: 100%;
  background: ${(props) => props.bgColor};
  box-shadow: inset 0 3px 0 -1px #d3aa9a, inset 0 -4px 0 -2px #4d494d,
    inset 4px 0 0 -2px #4d494d, inset -4px 0 0 -2px #4d494d;
`;

export { StatBarShell, StatBarGlass, StatReadout, StatBarFluid };
