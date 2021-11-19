import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Currencies from "./Components/Currencies";
import Scrollbtn from "./Components/Scroolbtn";

function App() {
  return (
    <div className="dark:bg-regal-dark min-h-screen">
      <Header />
      <Currencies />
      <Scrollbtn />
    </div>
  );
}

export default App;
