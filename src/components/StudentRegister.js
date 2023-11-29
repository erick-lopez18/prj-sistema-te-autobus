import React, { useState } from 'react';
import { auth } from '../firebase';

const StudentRegister = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    // Crear el usuario en Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);

    // Acceder al usuario creado
    const user = userCredential.user;

    // Puedes hacer más cosas aquí, como guardar información adicional en Firestore
    // por ejemplo, usando el ID del usuario (`user.uid`)
    console.log('Usuario registrado exitosamente:', user);
  } catch (error) {
    console.error('Error al registrar el usuario:', error.message);
  }
  };

  return (
    <div className='App-div'>
      <h2 className='App-title'>Registro para nuevo estudiante</h2>
      <div className='form-group'>
      <form onSubmit={handleSubmit}>
        <label className='col-sm-3 col-form-label'>
          Nombre completo:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        
        <br />
        <label className='col-sm-3 col-form-label'>
          Número de control:
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Teléfono:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Dirección:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Código postal:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Ciudad:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label className='col-sm-3 col-form-label'>
          Confirmar contraseña:
          <input
            type="password"
            value={password}
          />
        </label>
        <br /><br />
        <button className='App-button btn btn-primary' type="submit">Enviar registro</button>
      </form>
      </div>
    </div>
  );
};

export default StudentRegister;
