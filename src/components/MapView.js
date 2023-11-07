import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"

const MapView = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2stbG9wZXoxOCIsImEiOiJjbG9vOGU2d3oxampuMnFtbzRuN2Q4bmF2In0.bGxgR7zlBV5S8m2b-CEKQQ'; // Reemplaza 'TU_TOKEN_DE_MAPBOX' con tu token de acceso

    // Función para crear el mapa con las coordenadas especificadas
    const createMap = (coordinates) => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates, // Coordenadas iniciales
        zoom: 12, // Nivel de zoom inicial
      });

      // Limpia el mapa cuando el componente se desmonta
      return () => map.remove();
    };

    // Función para obtener la ubicación actual del dispositivo
    const getDeviceLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          createMap([longitude, latitude]);
        }, () => {
          // En caso de error al obtener la ubicación, muestra una ubicación predeterminada (Tijuana, B.C. México)
          createMap([-117.030227, 32.514947]);
        });
      } 
    };

    // Llama a la función para obtener la ubicación actual o mostrar la ubicación predeterminada
    getDeviceLocation();
  }, []);

  return (
    <div>
      <h1>Vista de mapa</h1>
      {/* Integra aquí tu mapa, por ejemplo, con Mapbox */}
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
    
  );
};

export default MapView;