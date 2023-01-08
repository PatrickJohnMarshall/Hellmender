import React from "react";
import { ReactTerminalInput } from "../terminal-styles/TerminalIndex_styles";

const TerminalInput = ({ children }: { children?: React.ReactNode }) => {
  return <ReactTerminalInput>{children}</ReactTerminalInput>;
};

export default TerminalInput;
