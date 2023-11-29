import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App-div'>
      <h1 className='App-title'>¿Necesitas transporte?</h1>
      <p>Transporte estudiantil para facilitar tu pasaje al instituto.</p>
      <Link to="/transport" className="App-button btn btn-primary">Empieza ahora</Link>
      <br className='App-div'></br>
      <h2 className='App-subtitle'>¿Cómo funciona?</h2>
      <p>Selecciona tu instituto, elige el transporte que más te convenga, y listo, ya puedes viajar.</p>
      <Link to="/map" className="App-button btn btn-primary">Checa nuestras rutas</Link>
      <br></br>
      <h2 className='App-subtitle'>¿Por qué somos tu mejor elección?</h2>
      <p>Contamos con la mejor seguridad que se pueda contar para la comodidad de nuestros clientes, brindando la mayor protección y comodidad a nuestros pasajeros.</p>
      <Link to="/student/login" className="App-button btn btn-primary">Regístrate con nosotros</Link>
      <br></br>
      <h2 className='App-subtitle'>Ponte en contacto</h2>
      <p>Nuestro equipo estará dispuesto en atender cualquier duda o aclaración deseada, no dude en contactarnos para mayor información.</p>
      <Link to="/contact-us" className="App-button btn btn-primary">Contáctanos</Link>
      <br></br>
    </div>
  );
};

export default Home;