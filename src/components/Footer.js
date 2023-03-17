import { dividerClasses } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; {new Date().getUTCFullYear()} All rights reserved techies</p>
    </div>
  );
}

export default Footer;
