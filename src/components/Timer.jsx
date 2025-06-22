import addIcon from "../assets/plus-circle.png";

const Timer = () => {
  return (
    
    <div className="flex flex-col bg-green-50 items-center h-85 border-3 border-white">
        {/* Dynamic text */}
      <h3 className="text-2xl font-extrabold font-secondary text-black">
        Pomodoro Timer
      </h3>

     <div className="w-full border border-white/30 backdrop-blur-md bg-white/20 rounded-xl shadow-lg ">
        <div className="flex space-x-6 justify-center">
            <button
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="font-tertiary font-bold">POMODORO</span>
            {/* Dynamic start/stop */}
          </button>

           <button
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="font-tertiary font-bold">SHORT BREAK</span>
            {/* Dynamic start/stop */}
          </button>

           <button
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="font-tertiary font-bold">LONG BREAK</span>
            {/* Dynamic start/stop */}
          </button>

        </div>
        <div className="text-8xl font-number text-greeno mt-10 text-center">
          25:00
        </div>

        <div className="flex space-x-6 mt-10 justify-center">
          <button
            className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
            hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="font-tertiary font-bold">START</span>
            {/* Dynamic start/stop */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
