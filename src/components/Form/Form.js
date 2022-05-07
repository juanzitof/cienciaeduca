import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Por favor, rellena todos los campos");
    } else {
      alert("Mensaje enviado");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const URL = `https://api.whatsapp.com/send?phone=$+541169732476&text=¡Hola! Mi nombre es: ${form.name} y mi correo electrónico es el siguiente: ${form.email}. %0ATengo la siguiente consulta:%0A%0A${form.message}. %0A%0A¡Quedo a la espera de tu respuesta!%0A¡Muchas gracias! &source=&data=`;

  return (
    <>
      <div className="form-container" id="contacto">
        <h3 className="form-title">Contacto</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-input">
              <label className="form-label" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                autoComplete="off"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <label className="form-label" htmlFor="email">
                Mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-message">
            <label className="form-label" htmlFor="message">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Escribí tu mensaje..."
              value={form.message}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <a href={URL} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-send">
              Enviar
            </button>
          </a>
        </form>
      </div>
    </>
  );
};

export default Form;
