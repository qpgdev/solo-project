import React from 'react';
import IntroRow from '../components/rows/IntroRow.js'
import IntroBox from '../components/boxes/IntroBox.js';

function SheetContainer() {
  return (
    <div className="SheetContainer" style={{border: "2px solid black"}}>
      <header className="sheet-container-header">
        <h1> Character Sheet Container </h1>
        <IntroRow />
      </header>
    </div>
  );
}



export default SheetContainer;