import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RegisterationForm from "./components/RegisterationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Password Checker</h3>
      </header>

      <div className="App-body">
        <RegisterationForm />
      </div>
    </div>
  );
}

export default App;
