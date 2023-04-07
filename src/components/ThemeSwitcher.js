import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";

function ThemeSwitcher({ darkMode, handleThemeChange }) {
  const handleThemeClick = () => {
    handleThemeChange(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <IconButton color="inherit" onClick={handleThemeClick}>
      {darkMode ? (
        <>
          <LightModeIcon />
          <Typography variant="subtitle1" fontSize={"10px"} style={{ marginLeft: "5px" }}>
            Light mode
          </Typography>
        </>
      ) : (
        <>
          <DarkModeIcon />
          <Typography variant="subtitle1" fontSize={"10px"} style={{ marginLeft: "5px" }}>
            Dark mode
          </Typography>
        </>
      )}
    </IconButton>
  );
}

export default ThemeSwitcher;
