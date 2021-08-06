import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://conan-online.fbcontent.cn/conan-operation-resource/qiypmegjiek1ial411.svg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default hot(App);
