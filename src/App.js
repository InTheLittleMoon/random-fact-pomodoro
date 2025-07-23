import React, { useState } from "react";
import "./App.css";

//components
import Clock from "./components/clock/clock";
import FactBox from "./components/factBox/factBox";
import ControlPanel from "./components/controlPanel/controlPanel";
import ResetWindow from "./components/resetWindow/resetWindow";

function App() {
  //states
  //3 phases that control which face of the app you see, "idle": start/exit, "running": Main timer/facts, "end": reset
  const [appPhase, setAppPhase] = useState("idle");

  if (appPhase === "running") {
    return (
      <div className="App-running">
        <Clock setAppPhase={setAppPhase} />
        <FactBox />
      </div>
    );
  }

  if (appPhase === "end") {
    return (
      <div className="App">
        <ResetWindow setAppPhase={setAppPhase} />
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
