import React from 'react';
import image from './images/funny_guru.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          For those that aint know, my name's Manny and I'm the React.js Guru
        </p>
        <a
          className="App-link"
          href="https://github.com/esanchez450"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come Holla at Me!!
        </a>
      </header>
    </div>
  );
}

export default App;
