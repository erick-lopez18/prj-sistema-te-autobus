import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/slate/bootstrap.css";
import MainNav from './components/MainNav'
import Home from './components/Home';
import Transport from './components/Transport'
import MapView from './components/MapView';
import Student from './components/Student';

const App = () => {

  const studentInfo = {
    fullName: 'Nombre completo del Estudiante',
    instituteName: 'Nombre del instituto',
    studentNumber: 'Número de control',
    instituteAddress: 'Dirección del instituto',
    activeSemester: 'Semestre activo',
    credentialPhoto: './images/credencial-frente-18211927.jpg',
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/map-view" element={<MapView />} />
          <Route path="/student-id" element={<Student {...studentInfo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;