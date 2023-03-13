import React from "react";
import "./App.css";
import { Books } from "./components/Books/Books";
import { SideNav } from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <div>
        <SideNav />
      </div>
      {/* <header className="App-header">Readify!!</header> */}
      <Books />
    </div>
  );
}

export default App;
