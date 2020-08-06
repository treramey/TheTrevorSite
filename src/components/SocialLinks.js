import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import "../styles/global.scss";

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li>
          <a
            href="https://github.com/treramey"
            target="_blank"
            className="contact__link contact__link-github"
          >
            <div className="contact__item">
              <span className="contact__label">Github</span>
              <FaGithub />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/treramey/"
            target="_blank"
            className="contact__link contact__link-linkedin"
          >
            <div className="contact__item">
              <span className="contact__label">Linkedin</span>
              <FaLinkedin />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/treramey"
            target="_blank"
            className="contact__link contact__link-twitter"
          >
            <div className="contact__item">
              <span className="contact__label">Twitter</span>
              <FaTwitter />
            </div>
          </a>
        </li>

        {/* <li>
          <a
            href="https://drive.google.com/file/d/1Lg9LpGQAwvgm_s5XF7AEiCv_diAiAhkC/view?usp=sharing"
            target="_blank"
            className="contact__link contact__link-resume"
          >
            <div className="contact__item">
              <span className="contact__label">Resume</span>
              <IoMdDocument />
            </div>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Contact;
