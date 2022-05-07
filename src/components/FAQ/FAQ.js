import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="FAQ" id="faq">
      <h3 className="FAQ__title">Preguntas frecuentes</h3>
      <div className="expandable-container">
        <input type="checkbox" id="check-input" className="check-input" />
        <label htmlFor="check-input" className="expandable">
          <header className="header-container">
            <div className="header">
              <h4 className="title">¿Qué servicio estoy contratando?</h4>
            </div>
            <span className="icon"></span>
          </header>
          <p className="content mt-4">
            - Estás contratando tutorías pedagógicas virtuales. Las diferenciamos
            con las clases particulares en 5 ítems:
          </p>
          <p className="content">Planteamos el problema.</p>
          <p className="content">
            - Te presentamos un plan específico de estudio. Revisamos la
            metodología de estudio para adaptarla y continuar con el
            aprendizaje.
          </p>
          <p className="content">- Trabajamos sobre las debilidades y potenciamos las fortalezas.</p>
          <p className="content">
            - Reflexionamos sobre los tiempos destinados a lo largo de la semana.
          </p>
        </label>
      </div>
      <div className="expandable-container">
        <input type="checkbox" id="check-input02" className="check-input" />
        <label htmlFor="check-input02" className="expandable">
          <header className="header-container">
            <div className="header">
              <h4 className="title">¿Cómo coordino un encuentro?</h4>
            </div>
            <span className="icon"></span>
          </header>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            iure ex, odit quasi laborum perspiciatis voluptate repellendus
            accusantium tenetur delectus laboriosam vel, voluptas culpa non
            soluta eum obcaecati! Ut, odit.
          </p>
        </label>
      </div>
      <div className="expandable-container">
        <input type="checkbox" id="check-input03" className="check-input" />
        <label htmlFor="check-input03" className="expandable">
          <header className="header-container">
            <div className="header">
              <h4 className="title">Por qué es un servicio personalizado?</h4>
            </div>
            <span className="icon"></span>
          </header>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            iure ex, odit quasi laborum perspiciatis voluptate repellendus
            accusantium tenetur delectus laboriosam vel, voluptas culpa non
            soluta eum obcaecati! Ut, odit.
          </p>
        </label>
      </div>
      <div className="expandable-container">
        <input type="checkbox" id="check-input04" className="check-input" />
        <label htmlFor="check-input04" className="expandable">
          <header className="header-container">
            <div className="header">
              <h4 className="title">Tengo que esperar el próximo encuentro para sacarme dudas?</h4>
            </div>
            <span className="icon"></span>
          </header>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            iure ex, odit quasi laborum perspiciatis voluptate repellendus
            accusantium tenetur delectus laboriosam vel, voluptas culpa non
            soluta eum obcaecati! Ut, odit.
          </p>
        </label>
      </div>

    </div>
  );
};

export default FAQ;
