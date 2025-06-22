import Logo from "../assets/logo.png";

const Header = () => {

  const darkModeToggler=()=>
  {
    console.log("Hello World.")
  }
  return (
    <header className="flex justify-between bg-green-50 p-4 items-center">
      <div id="logo">
        <h3 id="logo-name" className="text-2xl font-extrabold">
          <img src={Logo} alt="Logo" className="inline-block w-10 h-10 mr-2" />
          
        <span className="text-black font-secondary hover:tracking-wider transition">
          Productivity
          </span>

          <span className="text-black font-secondary">
             App
          </span>
      </h3>

      </div>
      
      <div id="dark-mode-button">
        <button onClick={darkModeToggler} className="text-tertiary  backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
        hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40  ">
          Dark Mode
        </button>
      </div>
      
    </header>
  );
};

export default Header;
