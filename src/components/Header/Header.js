import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.css"

function Header({ darkMode, handleThemeChange }) {
  const logo = "Z.ico";

  return (
    <div className={`heading ${darkMode ? "dark" : ""}`}>
      <div>
        <img id="logo" src={logo} alt="logo" />
      </div>

      <ThemeSwitcher
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />
    </div>
  );
}

export default Header;
