import React from "react";

function Footer(props) {
  return (
    <div className={`footer ${props.darkMode ? "dark" : ""}`}>
      <p>&copy; {new Date().getUTCFullYear()} All rights reserved techies</p>
      <br />
    </div>
  );
}

export default Footer;
