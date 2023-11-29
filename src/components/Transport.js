import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMap } from './MapContext';
import 'mapbox-gl/dist/mapbox-gl.css';

const Transport = ({ transports }) => {
  const { map } = useMap();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2stbG9wZXoxOCIsImEiOiJjbHBndzRwa3kwMXVzMmxxZHZzbm1rYnNuIn0.VyeTsggn6nXRogPd_amcfg'

    if (!transports || !mapboxgl.accessToken || !map) {
      return;
    }

    // Resto del código del componente...
  }, [transports, map]);

  return (
    <div className="transport-container">
      <div className="transport-list">
        {transports ? (
          transports.map((transport, index) => (
            <li key={index}>
              <h3>{transport.matricula}</h3>
              <p><strong>Partida:</strong> {transport.partida}</p>
              <p><strong>Llegada:</strong> {transport.llegada}</p>
              <p><strong>Instituto:</strong> {transport.instituto}</p>
              <p><strong>Tiempo de Viaje:</strong> {transport.tiempo} segundos</p>
              <p><strong>Distancia:</strong> {transport.distancia} metros</p>
            </li>
          ))
        ) : (
          <p>No hay datos de transporte disponibles.</p>
        )}
      </div>
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
    </div>
  );
};

export default Transport;
