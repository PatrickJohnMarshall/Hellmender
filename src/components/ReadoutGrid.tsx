import React from 'react';
import 'styles/_readout_grid.scss';
import GoldenFrame from './GoldenFrame';

function ReadoutGrid() {
  return (
    <div className="rpgui-container framed-golden">
      <div className="readout-grid">
        <GoldenFrame />
      </div>
    </div>
  );
}

export default ReadoutGrid;
