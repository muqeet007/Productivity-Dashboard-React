import addIcon from "../assets/plus-circle.png";
import { useState,useEffect } from "react";

const Timer = () => {

  const [mode, setMode] = useState("pomo"); // three modes: pomo, short, long
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(true); // to check if timer is running or not

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsRunning(true); // stop timer when mode changes

    if (newMode === "pomo") setTimeLeft(25 * 60);
    else if (newMode === "short") setTimeLeft(5 * 60);
    else if (newMode === "long") setTimeLeft(15 * 60);
  };

   // Timer logic: countdown when running
  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col bg-green-50 items-center h-85 border-3 border-white">
      {/* Dynamic text */}
      <h3 className="text-2xl font-extrabold font-secondary text-black">
        Pomodoro Timer
      </h3>

      <div className="w-full border border-white/30 backdrop-blur-md bg-white/20 rounded-xl shadow-lg ">
        <div className="flex space-x-6 justify-center">
          <button
            onClick={() => handleModeChange("pomo")}
            className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
              mode === "pomo"
                ? "bg-greeno text-white"
                : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
            }`}
          >
            <span className="font-tertiary font-bold">POMODORO</span>
          </button>

          <button
            onClick={() => handleModeChange("short")}
            className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
              mode === "short"
                ? "bg-greeno text-white"
                : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
            }`}
          >
            <span className="font-tertiary font-bold">SHORT BREAK</span>
          </button>

          <button
           onClick={() => handleModeChange("long")}
            className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
              mode === "long"
                ? "bg-greeno text-white"
                : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
            }`}
          >
            <span className="font-tertiary font-bold">LONG BREAK</span>
          </button>
        </div>

        <div className="text-8xl font-number text-greeno mt-10 text-center">
          {formatTime(timeLeft)}
        </div>

        <div className="flex space-x-6 mt-10 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 duration-300"
          >
            <span className="font-tertiary font-bold">
              {isRunning ? "STOP" : "START"}
            </span>
          </button>

          <button
           onClick={() => {
              setIsRunning(false);
              if (mode === "pomo") setTimeLeft(25 * 60);
              else if (mode === "short") setTimeLeft(5 * 60);
              else if (mode === "long") setTimeLeft(15 * 60);
            }}
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 duration-300"
          >
            <span className="font-tertiary font-bold">
              RESET TIMER
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
