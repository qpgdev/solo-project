import React, { Component } from 'react';
import LoginBox from './boxes/LoginBox.js';
import SignUpBox from './boxes/SignUpBox.js';
import SheetContainer from '../containers/SheetContainer.js';

// import {Route, Routes} from 'react-router-dom';
// Look into use-Navigate

function App() {
  return (
    <div className="App" style={{border: "2px solid black"}}>
      <header className="app-header">
        <h1> Vampire: The Masquerade Character Sheet Creator </h1>
        <header className='signup-login-grid'>
          <LoginBox />
          <SignUpBox />
        </header>
        <SheetContainer />
      </header>
    </div>
  );
}

export default App;