import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { Bones } from "react-bones/lib";

// Add this in node_modules/react-dom/index.js
window.React1 = require("react");

// Add this in your component file
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

function App() {
  return (
    <div className="App" style={{}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={300} />
        <h4
          style={{
            maxWidth: 300,
            backgroundColor: "#000000",
            borderRadius: 10,
            padding: 5,
          }}
        >
          {"💀 npm i react-bones 💀 "}
        </h4>
        <h5>{"Dead simple loading components for React and React-Native"}</h5>

        <div
          style={{
            borderRadius: 6,
            width: 400,
            height: 200,
            backgroundColor: "#ffffff",
            padding: 24,
          }}
        >
          <Bones borderRadius={25} />
          <div style={{ padding: 10 }} />
          <Bones width={"100%"} height={20} borderRadius={10} />
          <div style={{ padding: 10 }} />
          <Bones width={"100%"} height={20} borderRadius={10} />
          <div style={{ padding: 10 }} />
          <Bones width={"100%"} height={20} borderRadius={10} />
          <div style={{ padding: 10 }} />
        </div>
      </header>
    </div>
  );
}

export default App;
