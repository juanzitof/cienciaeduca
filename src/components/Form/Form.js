import React, { useState } from "react";

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
  };

  const URL = `https://api.whatsapp.com/send?phone=$+541169732476&text=¡Hola! Mi nombre es: ${form.name} y mi correo electrónico es el siguiente: ${form.email}. %0ATengo la siguiente consulta:%0A%0A${form.message}. %0A%0A¡Quedo a la espera de tu respuesta!%0A¡Muchas gracias! &source=&data=`;

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
         
        <a href={URL} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-send">
            Send
          </button>
        </a>
      </form>

      <div className="form__container"></div>
    </>
  );
};

export default Form;
