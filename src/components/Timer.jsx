import addIcon from "../assets/plus-circle.png";
import { useState, useEffect, useRef } from "react";
import alertSound from "../assets/Alarm-Clock-Short-chosic.com_.mp3";
import buttonSound from "../assets/old-radio-button-click-97549.mp3"; 

const Timer = () => {
  const [mode, setMode] = useState("pomo");
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(true);
  const [timesup, setTimesup] = useState(true);
  const audioRef = useRef(new Audio(alertSound));
  const buttonAudioRef = useRef(new Audio(buttonSound));

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsRunning(true);
    if (newMode === "pomo") setTimeLeft(25 * 60);
    else if (newMode === "short") setTimeLeft(5 * 60);
    else if (newMode === "long") setTimeLeft(15 * 60);
  };

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      
      audioRef.current.play();
      setTimesup(true);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col bg-green-50 items-center h-85 border-3 border-white">
      <h3 className="text-2xl font-extrabold font-secondary text-black">
        Pomodoro Timer
      </h3>

      {timesup ? (
        <div className="w-full border border-white/30 backdrop-blur-md bg-white/20 rounded-xl shadow-lg h-full text-center flex justify-center items-center space-x-10">
          <h3 className="text-5xl text-greeno mb-2 font-number">TIME'S UP !</h3>
          <button
            onClick={() => {
              setTimesup(false);
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
            }}
            className="mt-4 bg-greeno text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Dismiss
          </button>
        </div>
      ) : (
        <div className="w-full border border-white/30 backdrop-blur-md bg-white/20 rounded-xl shadow-lg">
          <div className="flex space-x-6 justify-center">
            <button
              onClick={() => handleModeChange("pomo")}
              className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
                mode === "pomo"
                  ? "bg-greeno text-white"
                  : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
              }`}
            >
              POMODORO
            </button>

            <button
              onClick={() => handleModeChange("short")}
              className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
                mode === "short"
                  ? "bg-greeno text-white"
                  : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
              }`}
            >
              SHORT BREAK
            </button>

            <button
              onClick={() => handleModeChange("long")}
              className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold ${
                mode === "long"
                  ? "bg-greeno text-white"
                  : "backdrop-blur-md bg-greeny border border-white/30 text-black hover:bg-white/20 hover:text-greeno transition"
              }`}
            >
              LONG BREAK
            </button>
          </div>

          <div className="text-8xl font-number text-greeno mt-10 text-center">
            {formatTime(timeLeft)}
          </div>

          <div className="flex space-x-6 mt-10 justify-center">
            <button
              onClick={() => {
                setIsRunning(!isRunning);
                if(!isRunning) buttonAudioRef.current.play();
              }}
              className="backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20 hover:text-greeno transition"
            >
              <span className="text-lg font-bold font-tertiary">
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
              className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20 hover:text-greeno transition"
            >
               <span className="text-lg font-bold font-tertiary">
               RESET TIMER
              </span>
             
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
