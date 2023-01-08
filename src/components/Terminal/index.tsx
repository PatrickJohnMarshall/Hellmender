import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  ChangeEvent,
  ReactNode,
} from "react";

import {
  TerminalWrapper,
  TerminalComp,
  ReactTerminalLine,
  TerminalHiddenInput,
} from "./terminal-styles/TerminalIndex_styles";

import TerminalInput from "./linetypes/TerminalInput";
import TerminalOutput from "./linetypes/TerminalOutput";

export interface Props {
  children?: ReactNode;
  onInput?: ((input: string) => void) | null | undefined;
  startingInputValue?: string;
}

const Terminal = ({ onInput, children }: Props) => {
  const [currentLineInput, setCurrentLineInput] = useState("");

  const scrollIntoViewRef = useRef<HTMLDivElement>(null);

  const updateCurrentLineInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentLineInput(event.target.value);
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (onInput != null && event.key === "Enter") {
      onInput(currentLineInput);
      setCurrentLineInput("");
    }
  };

  // An effect that handles scrolling into view the last line of terminal input or output
  const performScrolldown = useRef(false);
  useEffect(() => {
    if (performScrolldown.current) {
      // skip scrolldown when the component first loads
      scrollIntoViewRef?.current?.scrollIntoView({
        block: "nearest",
      });
    }

    performScrolldown.current = true;
  }, [children]);

  // We use a hidden input to capture terminal input; make sure the hidden input is focused when clicking anywhere on the terminal
  useEffect(() => {
    if (onInput == null) {
      return;
    }

    // keep reference to listeners so we can perform cleanup
    const elListeners: {
      terminalEl: Element;
      listener: EventListenerOrEventListenerObject;
    }[] = [];

    for (const terminalEl of document.getElementsByClassName(
      "react-terminal-wrapper"
    )) {
      const listener = () =>
        (
          terminalEl?.querySelector("#terminal-hidden-input") as HTMLElement
        )?.focus();
      terminalEl?.addEventListener("click", listener);
      elListeners.push({ terminalEl, listener });
    }

    return function cleanup() {
      elListeners.forEach((elListener) => {
        elListener.terminalEl.removeEventListener("click", elListener.listener);
      });
    };
  }, [onInput]);

  return (
    <TerminalWrapper className="react-terminal-wrapper">
      <TerminalComp>
        {children}
        {onInput && (
          <ReactTerminalLine key="terminal-line-prompt">
            {currentLineInput}
          </ReactTerminalLine>
        )}
        <div ref={scrollIntoViewRef}></div>
      </TerminalComp>
      <TerminalHiddenInput
        id="terminal-hidden-input"
        placeholder="Terminal Hidden Input"
        value={currentLineInput}
        autoFocus={onInput != null}
        onChange={updateCurrentLineInput}
        onKeyDown={handleEnter}
      />
    </TerminalWrapper>
  );
};

export { TerminalInput, TerminalOutput };
export default Terminal;
