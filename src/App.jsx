import React, { useState, useRef } from "react";
import "./App.css";
#test
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="time">{formatTime()}</div>

        <div className="buttons">
          <button onClick={start} className="start">
            Start
          </button>
          <button onClick={stop} className="stop">
            Stop
          </button>
          <button onClick={reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
