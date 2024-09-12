
import { faCodeCompare, faFan, faFire, faHandshake, faMoneyBill, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/Avatar';
import React, { useState } from 'react';
import Sniper from '../../assets/sniper.png';
import Phantom from '../../assets/phantom-assassin.png';
import Juggernaut from '../../assets/juggernaut.png';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const Talent = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
    const [playerData, setPlayerData] = useState({
        name: 'Juan Perez',
        loyalty: 10000,
        mmr: 3000,
        weeklyPlaytime: 10,
        topHeroes: [
          { name: 'Sniper', image: Sniper}, 
          { name: 'Phantom', image: Phantom},
          { name: 'Juggernaut', image: Juggernaut}
          ]
      });
  const navigate = useNavigate();
  return (
    <div className="card mb-3 gradient-effect p-2 text-center align-content-center rounded-5" role="button"
    onClick={() => navigate(RoutingPath.dashboardAmateur)}>
              <div className='circle--primary' />
              <div className='circle--secondary w-25' />
              <div className='circle--ternary w-25' />
              <div className="card-body">
              
                <div className='row g-2 align-content-center justify-content-center'>
                  <div className='col-2 col-md-1 align-content-center'>
                      <img className='img-fluid rounded-3 bg-dark' src={src} alt="Dendi"/>
                  </div>
                  <div className='col-10 col-md-2 align-content-center text-start justify-content-left'>
                    <p className='fw-bold text-white'>{name}</p>
                    <span className="badge bg-primary p-2 px-3 rounded-pill mb-1 fs-6">{profile}</span>
                    <p className='text-gray h6'>Perfil Adicional Mid</p>
                  </div>
                  <div className='col-12 col-md-2 align-content-center'>
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
                  <div className='col-12 col-md-3 align-content-center'>
                    <p className='fs-7 text-start fw-bold text-light'>Heroes más jugados</p>
                    <div className="d-flex justify-content-between d-block w-100">
                        {playerData.topHeroes.map((hero, index) => (
                            <Avatar name={hero.name} key={index} className="mx-0 w-25" src={hero.image} />
                        ))}
                    </div>
                  </div>
                  <div className='col-12 col-md-2 align-content-center fw-bold'>
                    <p className='fs-6'>MMR 3000</p>
                    <p className='fs-6'>+10 horas semanales</p>
                    <p className='fs-6'>Logros  Semifinalista</p>
                  </div>
                  <div className='col-12 col-md-2 align-content-center fw-bold'>
                    <p className='fs-6'>Win Rate 92%</p>
                    <p className='fs-6'>KDA 50/20/300</p>
                    <p className='fs-6'>AVG EXP x Min: 70</p>
                    <p className='fs-6'>AVG ORO x Min: 30</p>
                  </div>
                </div>
                <div className="row g-2 justify-content-end text-end">
                  <div className="col-md-auto col">
                      <button type="button" className="btn btn-warning rounded-pill pt-2 pb-2  d-flex align-items-center">
                          <FontAwesomeIcon className="mx-1" icon={faHandshake} size="1x" />
                          Conectar
                      </button>
                  </div>
                  <div className="col-md-auto col">
                      <button type="button" className="btn btn-secondary rounded-pill pt-2 pb-2  d-flex align-items-center">
                          <FontAwesomeIcon className="mx-1" icon={faMoneyBill} size="1x" />
                          Patrocinar
                      </button>
                  </div>
                  <div className="col-md-auto col">
                    <button type="button" className="btn btn-dark rounded-pill pt-2 pb-2  d-flex align-items-center">
                          <FontAwesomeIcon className="mx-1" icon={faCodeCompare} size="1x" />
                          Comparar
                      </button>
                  </div>
                  </div>
                </div>
            </div>
  );
};

export default Talent;
