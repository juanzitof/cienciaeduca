import { dataLevels } from "../../database/database";
import imageDone from "../../assets/images/ok.svg";
import "./Levels.css";

const Levels = () => {
  return (
    <div className="levels-container">
      <h3 className="levels-title">Niveles</h3>
      <div className="levels-cards">
        {dataLevels.map((level, index) => (
          <div className="levels-card" key={index}>
            <div className="levels-card__image">
              <img src={level.image} alt="level" />
            </div>
            <div className="levels-card__content">
              <h2 className="levels-card__title">{level.title}</h2>
              <ul>
                {level.description.map((description, index) => (
                  <li key={index} className="levels-card__content__item">
                    <img src={imageDone} alt="done" /> {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
