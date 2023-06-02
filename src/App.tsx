import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useModal } from "./hooks/useModal";

function App() {
  const { Modal } = useModal(true);
  return (
    <div className="App">
      <Modal title="Modal Title" body="Modal Body" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
