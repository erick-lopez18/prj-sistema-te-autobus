import React, { useEffect, useContext } from 'react';
import { auth } from './firebase';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext, { AuthProvider, useAuth }  from './AuthContext';
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/yeti/bootstrap.css";
import './App.css';
import MenuNav from './components/MenuNav'
import Home from './components/Home';
import Transport from './components/Transport'
import TransportRoutes from './components/TransportRoutes';
import TransportMap from './components/TransportMap';
import MapMain from './components/MapMain';
import MainMap from './components/MainMap';
import StudentProfile from './components/StudentProfile';
import StudentLogin from './components/StudentLogin';
import StudentRegister from './components/StudentRegister';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Ejemplo: Escuchar cambios en la autenticación
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Usuario autenticado:', user);
      } else {
        console.log('Usuario no autenticado');
      }
    });

    // Limpiar el efecto cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const studentInfo = {
    fullName: 'Nombre completo del estudiante',
    instituteName: 'Nombre del instituto',
    studentNumber: 'Número de control',
    instituteAddress: 'Dirección del instituto',
    activeSemester: 'Semestre activo',
    credentialPhoto: './images/credencial-frente-18211927.jpg',
  };

  return (
    <div className='App'>
      <AuthProvider>
      <BrowserRouter>
        <MenuNav />
        <Routes className='App-div'>
          <Route path="/" element={<Home />} />
          <Route path="/transport" element={<TransportRoutes />} />
          <Route path="map/:routeId" element={<TransportMap />} />
          <Route path="/map" element={<MapMain />} />
          {user ? (
            <Route path='/student/profile' element={<StudentProfile {...studentInfo} />} />
          ) : (
            <Route path='/student/login' element={<StudentLogin />} />
          )}
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;