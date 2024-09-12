
import { faFan, faFire, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const TopPlayer = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
  const navigate = useNavigate();
  return (
    <div className="card mb-3 gradient-effect p-2 text-center align-content-center rounded-5" role="button"
    onClick={() => navigate(RoutingPath.dashboardAmateur)}>
              <div className='circle--primary' />
              <div className='circle--secondary w-25' />
              <div className='circle--ternary w-25' />
              <div className="card-body">
                <div className='row g-2 align-content-center justify-content-center'>
                  <div className='col-2 align-content-center'>
                      <img className='img-fluid rounded-3 bg-dark' src={src} alt="Dendi"/>
                  </div>
                  <div className='col-10 col-md-3 align-content-center text-start justify-content-left'>
                    <p className='fw-bold text-white'>{name}</p>
                    <span className="badge bg-primary p-2 px-3 rounded-pill mb-1 fs-6">{profile}</span>
                    <p className='text-gray h6'>Perfil Adicional Mid</p>
                  </div>
                  <div className='col-12 col-md-3 align-content-center'>
                    <span className="badge bg-white text-dark p-2 px-3 mb-2 rounded-pill fs-6">
                        <FontAwesomeIcon className="mx-1" icon={faFire} size="1x" />
                        Liderazgo
                    </span>
                    <span className="badge bg-white text-dark p-2 px-3 mb-2 rounded-pill fs-6">
                        <FontAwesomeIcon className="mx-1" icon={faThumbsUp} size="1x" />
                        +1M Recommend
                    </span>
                    <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                        <FontAwesomeIcon className="mx-1" icon={faFan} size="1x" />
                        +500 seguidores
                    </span>
                  </div>
                  <div className='col-12 col-md-3 align-content-center fw-bold'>
                    <p className='fs-6'>Win Rate 92%</p>
                    <p className='fs-6'>KDA 50/20/300</p>
                    <p className='fs-6'>AVG EXP x Min: 70</p>
                    <p className='fs-6'>AVG ORO x Min: 30</p>
                  </div>
                </div>
                </div>
            </div>
  );
};

export default TopPlayer;


