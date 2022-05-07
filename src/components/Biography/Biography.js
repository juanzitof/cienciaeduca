import profile from "../../assets/images/profile.jpg";
import "./Biography.css";

const Biography = () => {
  return (
    <div className="biography">
      <img src={profile} alt="profile" className="biography-image" />
      <div className="biography-text">
        <p>¡Hola! Soy Mel...</p>
        <p>
          Poner los datos (nombre, carrera, qué le gusta hacer y algún mensaje
          que la diferencie del resto de las páginas y profesores.
        </p>
        <p>Puede ser en forma de globo de diálogo que se mueva</p>
        <p>
          Abre paso a Ahorá conocé todos los niveles en los que te puedo
          acompañar...
        </p>
        <a href="https://www.google.com.ar" className="biography-link">
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Biography;
