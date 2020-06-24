import React from "react";
import "../../styles/global.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__item">
        <span>{new Date().getFullYear()} Trevor Ramey</span>
        <span>Looking to start a project? Let's talk</span>
      </div>
    </footer>
  );
};

export default Footer;
