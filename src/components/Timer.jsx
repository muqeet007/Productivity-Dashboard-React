import { useState, useEffect, useRef, useContext } from "react";
import addIcon from "../assets/plus-circle.png";
import alertSound from "../assets/Alarm-Clock-Short-chosic.com_.mp3";
import buttonSound from "../assets/old-radio-button-click-97549.mp3";
import { ThemeContext } from "../context/ThemeContext";

const Timer = () => {
  const { theme } = useContext(ThemeContext);

  const [mode, setMode] = useState("pomo");
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(true);
  const [timesup, setTimesup] = useState(false);
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
    <div
      className={`flex flex-col items-center h-85 border-3 p-6 transition-colors duration-500
        ${theme ? 'bg-gray-900 border-gray-700' : 'bg-green-50 border-white'}`}
    >
      <h3 className={`text-2xl font-extrabold font-secondary transition-colors duration-500 ${theme ? 'text-white' : 'text-black'}`}>
        Pomodoro Timer
      </h3>

      {timesup ? (
        <div className={`w-full border backdrop-blur-md rounded-xl shadow-lg h-full text-center flex justify-center items-center space-x-10
          ${theme ? 'border-gray-600 bg-gray-800' : 'border-white/30 bg-white/20'}`}>
          <h3 className={`text-5xl font-number mb-2 ${theme ? 'text-green-400' : 'text-greeno'}`}>TIME'S UP!</h3>
          <button
            onClick={() => {
              setTimesup(false);
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }}
            className={`mt-4 px-4 py-2 rounded-lg shadow-md transition 
              ${theme ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-greeno text-white hover:bg-green-700'}`}
          >
            Dismiss
          </button>
        </div>
      ) : (
        <div className={`w-full border backdrop-blur-md rounded-xl shadow-lg transition-colors duration-500
          ${theme ? 'border-gray-600 bg-gray-800' : 'border-white/30 bg-white/20'}`}>

          {/* Timer Mode Buttons */}
          <div className="flex space-x-6 justify-center">
            {["pomo", "short", "long"].map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`transition-colors delay-100 px-4 py-2 rounded-xl shadow-md font-tertiary font-bold
                  ${mode === m
                    ? `${theme ? 'bg-green-500 text-white' : 'bg-greeno text-white'}`
                    : `backdrop-blur-md border ${theme ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
                      : 'bg-greeny text-black border-white/30 hover:bg-white/20 hover:text-greeno'}`}`}
              >
                {m === "pomo" ? "POMODORO" : m === "short" ? "SHORT BREAK" : "LONG BREAK"}
              </button>
            ))}
          </div>

          {/* Timer */}
          <div className={`text-8xl font-number text-center mt-10 transition-colors duration-500 
            ${theme ? 'text-green-400' : 'text-greeno'}`}>
            {formatTime(timeLeft)}
          </div>

          {/* Control Buttons */}
          <div className="flex space-x-6 mt-10 justify-center">
            <button
              onClick={() => {
                setIsRunning(!isRunning);
                if (!isRunning) buttonAudioRef.current.play();
              }}
              className={`backdrop-blur-md border px-4 py-2 rounded-xl shadow-md transition
                ${theme ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
                        : 'bg-greeny text-black border-white/30 hover:bg-white/20 hover:text-greeno'}`}
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
              className={`backdrop-blur-md border px-4 py-2 rounded-xl shadow-md transition
                ${theme ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
                        : 'bg-greeny text-black border-white/30 hover:bg-white/20 hover:text-greeno'}`}
            >
              <span className="text-lg font-bold font-tertiary">RESET TIMER</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
