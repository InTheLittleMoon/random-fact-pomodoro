import React from "react";

function ResetWindow({ setAppPhase }) {
  return (
    <div className="reset-window">
      <p>Time's up!</p>
      <button onClick={() => setAppPhase("idle")}>Reset</button>
    </div>
  );
}

export default ResetWindow;
