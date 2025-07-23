import React from "react";
import "../../App.css";

function ControlPanel({ appPhase, setAppPhase }) {
  console.log(appPhase);

  return (
    <div className="control-panel">
      <button className="pixelify" onClick={() => setAppPhase("running")}>
        Start Timer
      </button>
    </div>
  );
}

export default ControlPanel;
