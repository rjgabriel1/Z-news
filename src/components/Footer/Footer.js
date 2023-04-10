import React from "react";
import './Footer.css'
function Footer(props) {
  return (
    <div className={`footer ${props.darkMode ? "dark" : ""}`}>
      <p>&copy; {new Date().getUTCFullYear()} All rights reserved techies</p>
      <br />
    </div>
  );
}

export default Footer;
