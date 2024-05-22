import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`w-full p-6 ${theme} 
      ${theme == "dark" ? "bg-gray-950" : null}`}
      >
        <Navbar />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;