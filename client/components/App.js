import React, { Component } from 'react';
import LoginBox from './LoginBox.js';
import SheetContainer from '../containers/SheetContainer.js';
// import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{border: "2px solid black"}}>
      <header className="app-header">
        <h1> Vampire: The Masquerade Character Sheet Creator </h1>
        {/* <Routes>
          <Route path = "/" element={<LoginBox />}/>
          <Route path = "/sheet" element={<SheetContainer />}/>
        </Routes> */}
        <LoginBox />
        <SheetContainer />
      </header>
    </div>
  );
}

export default App;