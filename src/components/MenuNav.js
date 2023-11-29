import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MenuNav = () => {
    return (
        <nav class="App-navBar navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
            <div class=" container-fluid d-flex align-items-center">
                <Link className="App-navBrand navbar-brand" to="/">te.BUS 🚍🚏</Link>
                <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
            </div>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="App-navbar-nav navbar-nav ms-auto flex-row">
                        <li className="App-nav-item nav-item">
                            <Link className="App-nav-link nav-link text-black" to="/">💒 Inicio</Link>
                        </li>
                        <li class="App-nav-item nav-item">
                            <Link className="App-nav-link nav-link text-black" to="/transport">🚌 Transporte</Link>
                        </li>
                        <li class="App-nav-item nav-item">
                            <Link className="App-nav-link nav-link text-black" to="/map">📍 Mapa</Link>
                        </li>
                        <li class="App-nav-item nav-item">
                            <Link class="App-nav-link nav-link text-black" to="/student/login">👩‍🎓 Estudiante</Link>
                        </li>
                        <li class="App-nav-item nav-item">
                            <Link class="App-nav-link nav-link text-black" to="/contact-us">📮 Contáctanos</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default MenuNav;