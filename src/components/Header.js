import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({ darkMode, handleThemeChange }) {
  return (
    <div className={`heading ${darkMode ? "dark" : ""}`}>
      <h1>
        techies <PublicIcon />
      </h1>
      <ThemeSwitcher
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />
    </div>
  );
}

export default Header;
