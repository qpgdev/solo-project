import React from 'react';
import IntroRow from '../components/rows/IntroRow.js'

function SheetContainer() {
  return (
    <div className="SheetContainer" style={{border: "2px solid black"}}>
      <header className="sheet-container-header">
        <h1> Character Sheet </h1>
        <IntroRow />
      </header>
    </div>
  );
}

export default SheetContainer;