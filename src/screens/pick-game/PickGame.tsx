
import Avatar from 'components/Avatar';
import './PickGame.scss';
import React, { useState } from 'react';
import Dota from '../../assets/dota.png';
import Lol from '../../assets/lol.png';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const PickGame = ({ path = RoutingPath.dashboardAmateur, className ='' }) => {
    const navigate = useNavigate();

  return (
        <div className='row g-5 d-flex vh-100 align-content-center justify-content-center'>
            <div className='col-12 align-content-center'>
                <p className='display-6 text-center fw-bold text-light'>Selecciona  el juego MOBA  disponible</p>
            </div>

            <div className='col-md-auto align-content-center text-center text-md-end mx-3 btn-lol' role="button" 
            onClick={() => navigate(path)}>
                <img className='img-fluid lol-logo' style={{width: '15rem'}} src={Dota} alt="Dota"/>
                <p className='fs-3 text-center fw-bold text-light mt-3'>Dota 2</p>
            </div>
            <div className='col-md-auto align-content-center text-center text-md-start mx-3 btn-lol' role="button"
            onClick={() => navigate(path)}>
                <img className='img-fluid lol-logo' style={{width: '15rem'}} src={Lol} alt="League of Legends"/>
                <p className='fs-3 mt-3 text-center fw-bold text-light'>League of Legends</p>
            </div>
            
        </div>
  );
};

export default PickGame;
