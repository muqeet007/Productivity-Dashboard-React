import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";
const ThemeProvider=({children})=>
{

    const [theme,setTheme]=useState(true) // true===dark and false===light.
    return(
            <ThemeContext.Provider value={{theme,setTheme}}>
                {children}
            </ThemeContext.Provider>
    );
}

export default ThemeProvider;