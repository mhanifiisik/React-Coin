import logo from "./logo512.png";
import React, { useState } from "react";
import { FaSun, FaMoon, FaSistrix } from "react-icons/fa";
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex flex-row justify-between items-center w-full h-24 bg-transparent border-b-2 p-10 text-white">
      <a className="flex flex-row justify-center items-center gap-1 ">
        <img src={logo} className="max-h-12 max-w-12" alt="logo" />
        <p className="font-bold text-2xl sm:text-3xl">React Coin</p>
      </a>

      <button onClick={changeTheme}>
        {darkMode ? (
          <div className="flex flex-row justify-center items-center gap-5 font-bold text-xl">
            <p>LIGHT MODE</p>
            <FaSun size={20} color={"yellow"} />
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-5 font-bold text-xl">
            <p>DARK MODE</p>
            <FaMoon size={20} color={"yellow"} />
          </div>
        )}
      </button>
    </div>
  );
}

export default Header;
