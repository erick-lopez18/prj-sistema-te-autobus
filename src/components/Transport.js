import React from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"

const Transport = ({ transports }) => {
  // Configuración de Mapbox
  mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2stbG9wZXoxOCIsImEiOiJjbG9vOGU2d3oxampuMnFtbzRuN2Q4bmF2In0.bGxgR7zlBV5S8m2b-CEKQQ'; // Reemplaza con tu token de acceso

  if (!transports || !Array.isArray(transports)) {
    return <div>No hay datos de transporte disponibles.</div>;
  }

  // Función para crear el mapa con las rutas
  const createMap = () => {
    const map = new mapboxgl.Map({
      container: 'map', // Contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-117.030227, 32.514947], // Coordenadas iniciales
      zoom: 12, // Nivel de zoom inicial
    });

    // Agrega las rutas de transporte al mapa (debes implementar esta parte)
    // Por ejemplo, puedes usar GeoJSON para representar las rutas.

    // Limpia el mapa cuando el componente se desmonta
    return () => map.remove();
  };

  return (
    <div className="transport-container">
      <div className="transport-list">
        <h2>Transportes Disponibles</h2>
        <ul>
          {transports.map((transport, index) => (
            <li key={index}>
              <h3>{transport.matricula}</h3>
              <p><strong>Partida:</strong> {transport.partida}</p>
              <p><strong>Llegada:</strong> {transport.llegada}</p>
              <p><strong>Instituto:</strong> {transport.instituto}</p>
              <p><strong>Tiempo de Viaje:</strong> {transport.tiempo}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
    </div>
  );
};

export default Transport;