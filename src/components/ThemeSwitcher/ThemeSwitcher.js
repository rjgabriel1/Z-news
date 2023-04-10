import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

function ThemeSwitcher({ darkMode, handleThemeChange }) {
  const handleThemeClick = () => {
    handleThemeChange(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <IconButton
      className="toggleTheme"
      color="inherit"
      onClick={handleThemeClick}
    >
      {darkMode ? (
        <>
          <LightModeIcon />
        </>
      ) : (
        <>
          <DarkModeIcon />
        </>
      )}
    </IconButton>
  );
}

export default ThemeSwitcher;
