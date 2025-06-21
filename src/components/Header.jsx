const Header = () => {
  return (
    <header className="flex justify-between bg-purple-300 p-8 items-center">
      <h3 id="logo-name" className="text-2xl font-extrabold">
        <span className="text-white">
          Productivity
          </span>

          <span className="text-purple-500">
             App
          </span>
      </h3>

      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />  
        {/* onChange={toggleDarkMode} */}
        
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 
                        peer-checked:bg-purple-500 dark:peer-checked:bg-purple-500
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        peer-checked:after:translate-x-full peer-checked:after:border-white after:transition-all after:duration-300 after:ease-in-out">
        </div>

        <h3 className="ml-3 text-base font-semibold uppercase tracking-wider text-white">
          Enable Dark Mode
        </h3>
      </label>
    </header>
  );
};

export default Header;
