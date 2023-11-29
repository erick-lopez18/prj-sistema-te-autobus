// MapContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapContext = createContext();

export const useMap = () => {
  return useContext(MapContext);
};

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      return;
    }

    const createMap = (coordinates) => {
      const newMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates,
        zoom: 12,
      });

      setMap(newMap);

      return () => newMap.remove();
    };

    const getDeviceLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            createMap([longitude, latitude]);
          },
          () => {
            createMap([-117.030227, 32.514947]);
          }
        );
      }
    };

    getDeviceLocation();
  }, []);

  const contextValues = {
    map,
    setMap,
  };

  return <MapContext.Provider value={contextValues}>{children}</MapContext.Provider>;
};
