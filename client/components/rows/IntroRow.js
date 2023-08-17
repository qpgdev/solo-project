import React from 'react';
import '../../scss/app.scss'
import IntroBox from '../boxes/IntroBox.js';

function IntroRow() {
  const gridItemData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="intro-row" style={{border: "2px solid red"}}>
      <h1> Intro Row </h1>
      <div className="intro-grid-container">
        {gridItemData.map((item) => (
          <IntroBox key={item} className = "intro-grid-item"/>
        ))}
      </div>
    </div>
  );
}

export default IntroRow;