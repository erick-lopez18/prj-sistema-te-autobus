import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setCaptcha(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = async () => {
    try {
        console.log(auth);
        await signInWithEmailAndPassword(auth, email, password);
      navigate('/student/profile');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      console.group('Código de error:', error.code);
      // Aquí puedes agregar lógica adicional para manejar errores de inicio de sesión
    }
  };

  const handleRegister = () => {
    // Lógica para redirigir al usuario a la página de registro
    navigate('/student/register');
  };

  const handleForgotPassword = () => {
    // Lógica para redirigir al usuario a la página de recuperación de contraseña
    navigate('/student/forgot-password');
  };

  return (
    <div className='App-div'>
      <h1 className='App-title'>Bienvenido, por favor inicia sesión</h1>
      <div className='form-group'>
      <label htmlFor="email" className='col-sm-2 col-form-label'>Correo electrónico:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
      <br />
      <label htmlFor="password" className='col-sm-2 col-form-label'>Contraseña:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <br />
      <label htmlFor="captcha" className='col-sm-2 col-form-label'>Captcha:</label>
      <input type="text" id="captcha" value={captcha} onChange={handleCaptchaChange} />
      <br />
      <label htmlFor="rememberMe" className='col-sm-2 col-form-label'>Recordarme:</label>
      <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
      <br /><br />
      <button className='App-button btn btn-primary' onClick={handleLogin}>Iniciar sesión</button>
      <button className='App-button btn btn-primary' onClick={handleRegister}>Registrarse</button>
      <button className='App-button btn btn-primary' onClick={handleForgotPassword}>Recuperar contraseña</button>
    </div>
    </div>
  );
}

export default StudentLogin;
