import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../../styles/global.scss";

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact__list">
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
            href="mailto:hello@treramey.dev"
            target="_blank"
            className="contact__link contact__link-email"
          >
            <div className="contact__item">
              <span className="contact__label">Email</span>
              <font-awesome-icon icon="['far', 'envelope']" />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://drive.google.com/file/d/1Ve9kGzylOyERVpH5iGphpWuwUfOs9nkf/view?usp=sharing"
            target="_blank"
            className="contact__link contact__link-resume"
          >
            <div className="contact__item">
              <span className="contact__label">Resume</span>
              <font-awesome-icon icon="['far', 'file']" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
