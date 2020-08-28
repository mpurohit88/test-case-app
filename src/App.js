import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid='message'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <label htmlFor="emailid">Email Id</label> */}
      <input placeholder="Enter Email Id" name="emailid" id="emailid" aria-label="Enter Email Id" />
      <br /><br />
    </div>
  );
}

export default App;
