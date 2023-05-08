import React, { useState } from "react";
import "./Main.css";
import NewsFeed from "../News/NewsArticle";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Main({ darkMode, handleThemeChange }) {
  const [category, setCategory] = useState("news");
  const logo = "ZN.png";

  const handleLinkClick = (event) => {
    const clickedCategory = event.target.textContent.toLowerCase();
    setCategory(clickedCategory);
  };

  const renderNavLinks = () => {
    const navLinks = ["Headlines", "Technology", "Gaming", "Crypto"];

    return navLinks.map((link, index) => (
      <button key={index} className="nav-link" onClick={handleLinkClick}>
        {link}
      </button>
    ));
  };

  return (
    <>
      <div className={`heading ${darkMode ? "dark" : ""}`}>
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>

        <div className={`nav-items ${darkMode ? "dark" : ""}`}>
          {renderNavLinks()}
        </div>

        <ThemeSwitcher
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </div>

      <div className="category-heading">
        <h4>Category &gt; {category ? category : "news"}</h4>
      </div>

      <NewsFeed darkMode={darkMode} category={category} />
    </>
  );
}
