import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock.jsx';
import Counter from './components/counter.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock /><Counter />
      </header>
    </div>
  );
}

export default App;
