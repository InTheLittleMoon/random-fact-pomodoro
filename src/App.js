import React, { useState } from "react";
import "./App.css";

//components
import Clock from "./components/clock/clock";
import FactBox from "./components/factBox/factBox";
import ControlPanel from "./components/controlPanel/controlPanel";

function App() {
  //states
  //2 phases that control which face of the app you see, "idle": start/exit, "running": Main timer/facts
  const [appPhase, setAppPhase] = useState("idle");

  if (appPhase === "running") {
    return (
      <div className="App-running">
        <Clock setAppPhase={setAppPhase} />
        <FactBox />
      </div>
    );
  }

  return (
    <div className="App">
      <ControlPanel appPhase={appPhase} setAppPhase={setAppPhase} />
    </div>
  );
}
export default App;
