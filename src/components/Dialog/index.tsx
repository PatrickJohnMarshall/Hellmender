import { useState } from "react";

import { DialogBox } from "components/Dialog/dialog-styles/dialog-styles";

import { GameState } from "state/GameState";

type Props = {
  state: GameState;
  setDialogToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dialog: React.FC<Props> = ({ state, setDialogToggle }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleDrag(event) {
    event.dataTransfer.setDragImage(new Image(), 0, 0);
    const x = event.clientX - 75;
    const y = event.clientY - 75;
    setPosition({ x, y });
  }

  const handleDragEnd = (event) => {
    const x = event.clientX - 75;
    const y = event.clientY - 75;
    setPosition({ x, y });
  };

  return (
    <DialogBox
      style={{ left: position.x, top: position.y }}
      draggable
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      left={position.x}
      top={position.y}
    >
      Pog
    </DialogBox>
  );
};

export default Dialog;
