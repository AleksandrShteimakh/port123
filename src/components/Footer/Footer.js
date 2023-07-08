import React from "react";
import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

const Footer = () => {
  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!" onClick={() => handleIconClick("https://m.vk.com/id4596647")}>
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" onClick={() => handleIconClick("https://instagram.com/sasha_sashin_s?igshid=NTc4MTIwNjQ2YQ==")}>
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" onClick={() => handleIconClick("https://www.facebook.com/Ekklesiast81")}>
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" onClick={() => handleIconClick("https://github.com/AleksandrShteimakh")}>
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" onClick={() => handleIconClick("https://www.linkedin.com/in/aleksandr-shteimakh-742757260/")}>
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
