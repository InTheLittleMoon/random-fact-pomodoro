import React, { useState, useEffect } from "react";
import "../../App.css";

function Clock({ setAppPhase }) {
  //states
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Effect to handle the countdown timer
  useEffect(() => {
    let timer;
    if (!isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup the timer on unmount or pause
  }, [isPaused, timeLeft]);

  //Handles reset functionality
  const handleReset = () => {
    setTimeLeft(25 * 60);
  };

  //Handles pause and resume functionality
  const handlePause = (command) => {
    setIsPaused(true);
    if (command === "pause") {
      setTimeLeft((prev) => prev); // Keep the current time left
    } else if (command === "resume") {
      setIsPaused(false);
      // Resume logic can be handled by the useEffect
    }
  };

  return (
    <div className="clock-block">
      <div className="ui-panel">
        <button className="pixelify" onClick={() => setAppPhase("idle")}>
          Main Menu
        </button>
        {/* resume / pause options based off isPaused state  */}
        {isPaused ? (
          <button className="pixelify" onClick={() => handlePause("resume")}>
            Resume
          </button>
        ) : (
          <button className="pixelify" onClick={() => handlePause("pause")}>
            Pause
          </button>
        )}

        <button className="pixelify" onClick={handleReset}>
          Reset timer
        </button>
      </div>
      <p>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Clock;
