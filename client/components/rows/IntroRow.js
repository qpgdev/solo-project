import React from 'react';
import IntroBox from '../boxes/IntroBox.js';

function IntroRow() {
  return (
    <div className="IntroRow" style={{backgroundColor: "#88498F"}}>
      <header className="intro-row">
        <h1> Intro Row </h1>
        <IntroBox />
        <IntroBox />
        <IntroBox />
      </header>
    </div>
  );
}

export default IntroRow;