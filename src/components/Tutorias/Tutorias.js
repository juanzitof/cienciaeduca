import { dataFirstCard, dataSecondCard } from "../../database/database";
import "./Tutorias.css";

const Tutorias = () => {
  return (
    <>
      <div className="tutorias">
        <h2 className="tutorias-title">Lo mejor de Ciencia Educa Argentina</h2>
        <h3 className="tutorias-subtitle">Tutorías pedagógicas virtuales</h3>
        <p className="tutorias-description">
          El estilo de estudio lo organizamos en etapas con la finalidad de
          acompañar de la mejor forma el proceso de aprendizaje de cada uno.
        </p>
      </div>
      <div className="tutorias tutorias-cards-one">
        {dataFirstCard.map((card, index) => (
          <div className="tutorias-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3 className="tutorias-card-title">{card.title}</h3>
            <p className="tutorias-card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="tutorias tutorias-cards-two">
        {dataSecondCard.map((card, index) => (
          <div className="tutorias-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3 className="tutorias-card-title">{card.title}</h3>
            <p className="tutorias-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tutorias;
