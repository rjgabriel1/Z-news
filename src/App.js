import React, { useState } from "react";
import Header from "./components/Header/Header";
import NewsArticle from "./components/News/NewsArticle";
import Heading from "./components/Header/Menu";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />

      <Heading />

      <div className={` ${darkMode ? "dark" : ""}`}>
        <NewsArticle darkMode={darkMode} />
      </div>

      <Footer />
    </>
  );
}

export default App;
