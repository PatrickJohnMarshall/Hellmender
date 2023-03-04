import React, { useState, useRef, useEffect } from "react";

import { DialogBox } from "components/Dialog/dialog-styles/dialog-styles";

import { GameState } from "state/GameState";

type Props = {
  state: GameState;
  setDialogToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dialog: React.FC<Props> = ({ state, setDialogToggle }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);
  const isDraggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const element = draggableRef.current;
    const rect = element.getBoundingClientRect();

    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    isDraggingRef.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) {
      return;
    }

    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const draggableElement = draggableRef.current;

    draggableElement.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      draggableElement.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <DialogBox
      className="draggable"
      ref={draggableRef}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      Dialog Placeholder
    </DialogBox>
  );
};

export default Dialog;
