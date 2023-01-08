import React from "react";
import { ReactTerminalOutput } from "../terminal-styles/TerminalIndex_styles";

const TerminalOutput = ({ children }: { children?: React.ReactNode }) => {
  return <ReactTerminalOutput>{children}</ReactTerminalOutput>;
};

export default TerminalOutput;
