import "./App.css";
import React from "react";

import SimulatePage from "./pages/simulatePage";
import Title from "./component/header";

function App() {
  return (
    <div className="mainContainer">
      <Title title="Robot Simulator" />
      <SimulatePage />
    </div>
  );
}

export default App;
