import Logo from "../Logo/Logo";
import "./Navbar.css";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Navbar = () => {
  return (
    <div className="navbar">
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
            <a href="mailto:cienciaeduca@gmail.com" target="blank">
              <span
                className="iconify"
                data-icon="ant-design:mail-outlined"
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
            <a href="https://telegram.com/cienciaeduca" target="blank">
              <span
                className="iconify"
                data-icon="akar-icons:telegram-fill"
              ></span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="nav">
        <Logo />
        <ul>
          <li>
            <a href="#tutorias" className="nav-link">
              ¿Qué es una tutoría pedagógica?
            </a>
          </li>
          <li>
            <a href="#niveles" className="nav-link">
              Niveles
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-link">
              Preguntas frecuentes
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="container__content">
          <WhatsAppButton />
        </div>
        <h1 className="title">TUTORÍAS</h1>
        <p className="learn-more">Conocé más</p>
        <span className="arrow-down iconify" data-icon="ep:arrow-down-bold" ></span>
      </div>
    </div>
  );
};

export default Navbar;
