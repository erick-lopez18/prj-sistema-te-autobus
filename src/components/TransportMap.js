import React from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"
import { useParams } from 'react-router-dom';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

const TransportMap = () => {
    const { routeId } = useParams();
  const mapboxToken = 'pk.eyJ1IjoiZXJpY2stbG9wZXoxOCIsImEiOiJjbHBndzRwa3kwMXVzMmxxZHZzbm1rYnNuIn0.VyeTsggn6nXRogPd_amcfg'; // Reemplaza con tu propio token
  const initialViewport = {
    width: '100%',
    height: '100%',
    latitude: 37.7749, // Latitud del primer waypoint
    longitude: -122.4194, // Longitud del primer waypoint
    zoom: 12,
  };

  return (
    <div className='App-div'>
      <ReactMapGL
        {...initialViewport}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={() => {}}
      >
        {/* Marcador del primer waypoint */}
        <Marker latitude={37.7749} longitude={-122.4194} offsetLeft={-20} offsetTop={-10}>
          <div>Primer Waypoint</div>
        </Marker>

        {/* Marcador del segundo waypoint */}
        <Marker latitude={37.7749} longitude={-122.4294} offsetLeft={-20} offsetTop={-10}>
          <div>Segundo Waypoint</div>
        </Marker>

        {/* Controles de navegación */}
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
};

export default TransportMap;
