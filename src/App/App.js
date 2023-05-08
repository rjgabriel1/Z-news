import React, { useState, useEffect } from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import "./app.css";
console.log(`${process.env.REACT_APP_APIKEY}`);
function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const handleThemeChange = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
  };

  const handleLinkClick = (event) => {
    console.log(`${event.target.textContent} clicked`);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Main
        handleLinkClick={handleLinkClick}
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      />
      <Footer />
    </>
  );
}

export default App;
