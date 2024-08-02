import React, { useState, useEffect } from 'react';
import './App.css';
import Arithmetic from './components/Arithmetic';
import Geometry from './components/Geometry';
import Pythagorean from './components/Pythagorean';
import SquareRoot from './components/SquareRoot';
import Exponential from './components/Exponential';
import Algebra from './components/Algebra';
import Calculus from './components/Calculus';

function App() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from local storage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const showMenu = (menu) => {
    setActiveMenu(menu);
  };

  const backToMain = () => {
    setActiveMenu('main');
  };

  return (
    <div className="App">
      <button className="dark-mode-switch" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {activeMenu === 'main' && (
        <div id="main-menu">
          <button onClick={() => showMenu('arithmetic')}>Arithmetic</button>
          <button onClick={() => showMenu('geometry')}>Geometry</button>
          <button onClick={() => showMenu('pythagorean')}>Pythagorean Theorem</button>
          <button onClick={() => showMenu('sqrt')}>Square Root</button>
          <button onClick={() => showMenu('exponential')}>Exponential</button>
          <button onClick={() => showMenu('algebra')}>Algebra</button>
          <button onClick={() => showMenu('calculus')}>Calculus</button>
        </div>
      )}
      {activeMenu === 'arithmetic' && (
        <div>
          <Arithmetic />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'geometry' && (
        <div>
          <Geometry />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'pythagorean' && (
        <div>
          <Pythagorean />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'sqrt' && (
        <div>
          <SquareRoot />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'exponential' && (
        <div>
          <Exponential />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'algebra' && (
        <div>
          <Algebra />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
      {activeMenu === 'calculus' && (
        <div>
          <Calculus />
          <button onClick={backToMain}>Back to Main Menu</button>
        </div>
      )}
    </div>
  );
}

export default App;
