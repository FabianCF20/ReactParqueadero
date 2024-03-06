import React from 'react';
import './Home.css';
import imagenLogo from './Fotos/logo.png';
import imagenMotoCarro from './Fotos/moto y carroo.jpg';
import Iconophone from './iconos/phonearrow.svg';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={imagenLogo} alt="Logo de la Empresa" />
          <h1>SLP</h1>
        </div>
        <div className="menu">
          <Link to='/login'>Login</Link>
          <Link to='/record'>Record</Link>
        </div>
      </header>
      <div className="titulo">
        <h1 className="nombre">Sistema Lógico de Parqueo</h1>
      </div>
      <div className="subTitulo">
        <h2 className="slogan">PARQUEATE TRANQUILO <br /> CON NOSOTROS</h2>
      </div>
      <img src={imagenMotoCarro} className="imgMotoYCarro" alt="Moto y carro" />
      <div className="UC">
        <Link to="#">UBICACIÓN</Link>
        <Link to="#">CONTACTO</Link>
        <img src={Iconophone} alt="Ícono teléfono" />
      </div>
    </div>
  );
}

export default HomePage;