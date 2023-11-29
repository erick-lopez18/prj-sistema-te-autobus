import React, { useEffect } from 'react';
import { useMap } from './MapContext';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";

const MainMap = () => {
  const { map } = useMap();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2stbG9wZXoxOCIsImEiOiJjbHBndzRwa3kwMXVzMmxxZHZzbm1rYnNuIn0.VyeTsggn6nXRogPd_amcfg'

    // Aquí puedes agregar lógica específica para la vista MainMap si es necesario
  }, [map]);

  return (
    <div>
      <h1>Nuestras rutas</h1>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default MainMap;
