const Header = () => {

  const darkModeToggler=()=>
  {
    console.log("Hello World.")
  }
  return (
    <header className="flex justify-between bg-gradient-to-r from-greeno to-greeno-light p-8 items-center">
      <div id="logo">
        <h3 id="logo-name" className="text-2xl font-extrabold">
        <span className="text-white font-secondary hover:tracking-wider transition">
          Productivity
          </span>

          <span className="text-white font-secondary">
             App
          </span>
      </h3>

      </div>
      
      <div id="dark-mode-button">
        <button onClick={darkModeToggler} className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-2 rounded-xl shadow-md hover:bg-white/20 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40  ">
          Dark Mode
        </button>
      </div>
      
    </header>
  );
};

export default Header;
