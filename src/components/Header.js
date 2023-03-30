import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({ darkMode, handleThemeChange }) {
  const appName = "ZNews";

  return (
    <div className={`heading ${darkMode ? "dark" : ""}`}>
      <h1>
        {appName} <PublicIcon />
      </h1>
      <ThemeSwitcher
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />
    </div>
  );
}

export default Header;
