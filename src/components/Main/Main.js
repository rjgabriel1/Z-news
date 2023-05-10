import React, { useState } from "react";
import "./Main.css";
import NewsFeed from "../News/NewsArticle";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const logo = "zoomer.png";

export default function Main({ darkMode, handleThemeChange }) {
  const [category, setCategory] = useState("news");
  const handleLinkClick = (event) => {
    const category = event.target.textContent;
    setCategory(category.toLowerCase());
  };

  return (
    <>
      <div className={`heading ${darkMode ? "dark" : ""}`}>
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>

        <div className={`nav-items ${darkMode ? "dark" : ""}`}>
          <button className="nav-link" onClick={handleLinkClick}>
            Headlines
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Technology
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Gaming
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Crypto
          </button>
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
