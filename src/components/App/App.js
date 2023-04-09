import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import NewsFeed from "../News/NewsArticle";
import Menu from "../Header/Menu";
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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />

      <Menu />

      <div className={`${darkMode ? "dark" : ""}`}>
        <NewsFeed darkMode={darkMode} />
      </div>

      <Footer />
    </>
  );
}

export default App;
