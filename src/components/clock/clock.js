import React, { useState, useEffect } from "react";
import "../../App.css";

function Clock({ setAppPhase }) {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;


  const handleReset = () => {
    // Logic to reset the timer can be added here
    //should bring timer back to 25 minutes

    //for testing
    setAppPhase("end")
  };

  return (
    <div className="clock-block">
      <div className="ui-panel">
        <button className="pixelify" onClick={() => setAppPhase("idle")}>
          Main Menu
        </button>
        <button className="pixelify" onClick={handleReset}>
          Reset timer -  ends timer for testing
        </button>
      </div>
      <p>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Clock;
