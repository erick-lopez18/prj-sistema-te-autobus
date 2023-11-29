import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TransportMap from './TransportMap';

const TransportRoutes = () => {
  const routes = [
    {
      id: 1,
      driver: 'Mario Gomez',
      institute: 'Instituto Tecnologico de Tijuana',
      schedule: '7:00 AM - 1:00 AM',
      route: 'Otay - Tomás Aquino',
    },
    {
      id: 2,
      driver: 'Juan Leon',
      institute: 'Instituto Tecnologico de Tijuana',
      schedule: '7:00 AM - 1:00 AM',
      route: 'Tomas Aquino - Otay',
    },
    {
        id: 3,
        driver: 'Daniela Padilla',
        institute: 'Instituto Tecnologico de Tijuana',
        schedule: '2:00 AM - 8:00 AM',
        route: 'Tomas Aquino - Otay',
      },
      {
        id: 4,
        driver: 'Kevin Garcia',
        institute: 'Instituto Tecnologico de Tijuana',
        schedule: '2:00 AM - 8:00 AM',
        route: 'Otay - Tomas Aquino',
      },
  ];

  const navigate = useNavigate();

  const handleVerEnMapaClick = (routeId) => {
    navigate(`/transport/map/${routeId}`);
  };

  return (
    <div className='App-div'>
      <h2 className='App-title'>Rutas disponibles</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID Transporte</th>
            <th>Chofer</th>
            <th>Instituto</th>
            <th>Horario</th>
            <th>Ruta</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.driver}</td>
              <td>{route.institute}</td>
              <td>{route.schedule}</td>
              <td>{route.route}</td>
              <td>
                <button onClick={() => handleVerEnMapaClick(route.id)}>Ver en mapa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransportRoutes;
