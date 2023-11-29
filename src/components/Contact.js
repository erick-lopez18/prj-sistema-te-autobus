import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to handle form submission
  };

  return (
    <div className='App-div'>
      <h1 className='App-title'>Contáctanos</h1>
      <p>Para brindarte una mejor atención, te recomendamos que primero describas el problema que tienes antes de decirnos qué deseas lograr. También puedes enviarnos un correo electrónico o pedir una cita. Nuestro tiempo de respuesta general es un día hábil.</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label className='col-sm-3 col-form-label' htmlFor="name">Nombre completo (obligatorio)</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className='col-sm-3 col-form-label' htmlFor="email">Correo electrónico (obligatorio)</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className='col-sm-3 col-form-label'htmlFor="message">Mensaje (obligatorio)</label>
        <br />
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br /><br />
        <button className='App-button' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
