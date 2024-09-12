import React from 'react';
import './VerticalNavbar.scss';  // Importamos los estilos personalizados
import Logo from '../assets/logo.png';
import { faEnvelope, faHome, faLock, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerticalNavbar = () => {
  return (
    <div className="navbar-container d-flex flex-column align-items-center text-center bottom-0 ms-sm-0 ms-md-4 position-fixed">
      {/* Icono superior */}
      <div className="icon-item mt-4 text-center">
      <img className='img-fluid w-75' src={Logo} alt="Legends Academy"/>
      </div>
      <br /> <br />
      {/* Espacio entre los iconos */}
      <div className="icon-item mt-5" onClick={() => window.open("https://google.cl", '_blank')}>
      <FontAwesomeIcon className="text-white" icon={faHome} size="1x" />
      </div>
      
      <div className="icon-item mt-4" onClick={() => window.open("https://google.cl", '_blank')}>
        <FontAwesomeIcon className="text-white" icon={faUser} size="1x" />
      </div>
      
      {/* El icono destacado (con efecto de luz) */}
      <div className="icon-item active mt-4 p-3 pt-2 pb-2" onClick={() => window.open("https://google.cl", '_blank')}>
        <FontAwesomeIcon className="text-white" icon={faEnvelope} size="1x" />
      </div>
      
      <div className="icon-item mt-4" onClick={() => window.open("https://google.cl", '_blank')}>
      <FontAwesomeIcon className="text-white" icon={faLock} size="1x" />
      </div>
      
      <div className="icon-item mt-4" onClick={() => window.open("https://google.cl", '_blank')}>
      <FontAwesomeIcon className="text-white" icon={faStar} size="1x" />
      </div>
    </div>
  );
};

export default VerticalNavbar;
