import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer-logo" />
      <p className="footer-text">{year} © All rights reserved</p>
      <nav className="social-links">
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <span
                className="iconify"
                data-icon="ant-design:facebook-filled"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <span
                className="iconify"
                data-icon="ant-design:instagram-filled"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cienciaeduca" target="blank">
              <span
                className="iconify"
                data-icon="ant-design:linkedin-filled"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://telegram.com/cienciaeduca" target="blank">
              <span
                className="iconify"
                data-icon="akar-icons:telegram-fill"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=0123456789">
              <span
                className="iconify"
                data-icon="akar-icons:whatsapp-fill"
              ></span>
            </a>
          </li>
          <li>
            <a href="mailto:cienciaeduca@gmail.com" target="blank">
              <span
                className="iconify"
                data-icon="ant-design:mail-outlined"
              ></span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
