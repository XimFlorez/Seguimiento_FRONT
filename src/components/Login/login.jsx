import React from 'react';
import './login.css';
import backgroundImg from '../../assets/img/fondo.png';
import logo from '../../assets/img/esumer-logo.png';


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left" style={{ backgroundImage: `url(${backgroundImg})` }}>
        </div>

        <div className="login-right">
          <img src={logo} alt="Esumer Virtual Logo" className="login-logo" />

          <form className="form">
            <input type="text" placeholder="Nombre de usuario" />
            <input type="password" placeholder="Contraseña" />
            <a href="#" className="forgot">¿Olvidó su nombre de usuario o contraseña?</a>
            <button type="submit" className="submit">Acceder</button>
          </form>

      
        </div>
      </div>
    </div>
  );
};

export default Login;
