<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
>>>>>>> 34a7a06133eebcc446e99c76849f271d4dbef2b9

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          color="secondary"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
