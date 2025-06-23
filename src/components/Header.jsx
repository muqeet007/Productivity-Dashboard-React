import { useContext } from "react";
import Logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const darkModeToggler = () => {
    setTheme(!theme);
  };

  return (
    <header className={`flex justify-between p-4 items-center transition-colors duration-500 ${theme ? 'bg-gray-900' : 'bg-green-50'}`}>
      <div id="logo">
        <h3 id="logo-name" className="text-2xl font-extrabold flex items-center">
          <img src={Logo} alt="Logo" className="inline-block w-10 h-10 mr-2" />
          <span className={`font-secondary hover:tracking-wider transition-colors duration-500 ${theme ? 'text-white' : 'text-black'}`}>
            Productivity
          </span>
          <span className={`ml-1 font-secondary transition-colors duration-500 ${theme ? 'text-white' : 'text-black'}`}>
            App
          </span>
        </h3>
      </div>

      <div id="dark-mode-button">
        <button
          onClick={darkModeToggler}
          className={`backdrop-blur-md border px-4 py-2 rounded-xl shadow-md transition-colors duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 
            ${theme ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-greeny text-black hover:bg-white/20 hover:text-greeno border-white/30'}
          `}
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
