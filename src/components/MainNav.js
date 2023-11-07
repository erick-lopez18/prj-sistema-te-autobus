import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">TE-Autobus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/transport">Transporte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/map-view">Mapa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/student-id">Estudiante</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default MainNav;