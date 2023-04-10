import React, { useState, useEffect } from "react";

import NavBar from "../Header/CategoryMenu";
import Footer from "../Footer/Footer";
import "./app.css";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleLinkClick = (event) => {
    // Handle click event for each link here
    console.log(event.target.textContent + " clicked");
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <NavBar
        handleLinkClick={handleLinkClick}
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />

      <Footer />
    </>
  );
}

export default App;
