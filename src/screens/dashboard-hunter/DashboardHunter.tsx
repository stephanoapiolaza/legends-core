import React, { useState, useEffect } from 'react';
import Dota from '../../assets/dota.png';
import PlayersAvatar from '../../assets/players-avatar.png';
import Sniper from '../../assets/sniper.png';
import Player from '../../assets/player.png';
import Phantom from '../../assets/phantom-assassin.png';
import Juggernaut from '../../assets/juggernaut.png';
import PlayerSearchBar from 'components/PlayerSearchBar';
import { faAnchor, faBell, faBorderTopLeft, faCartPlus, faKhanda, faMoneyBill, faPeopleGroup, faPlus, faRankingStar, faUser, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagento } from '@fortawesome/free-brands-svg-icons';
import TopPlayer from 'components/TopPlayer';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const DashboardHunter = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
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
    <><div className="row mt-1 mb-5 align-items-center g-2 g-lg-0">
          <div className="col-12 col-md-4 ">
              <div className="p-2 d-flex flex-row align-items-center">
                  <h2 className="fs-2 fw-bold text-light">Hola, {playerData.name}</h2>
                  <img src={Dota} className="rounded ms-3" alt="Dota 2" />
              </div>
          </div>
          <div className="col-12 col-md-4 ">
              <PlayerSearchBar />
          </div>
          <div className="col-12 col-md-4 ">
              <button className="btn btn-primary rounded-circle">
                  <FontAwesomeIcon className="text-white" icon={faBell} size="1x" />
              </button>
          </div>
      </div>
      <div className="row gx-2">
        <div className="col-12 col-md-12">
        <div className='row'>
              <div className='col-12'>
                  <h5 className="fs-3 text-light fw-bold">Oportunidades de Inversión Destacadas</h5>
              </div>
              <div className="col-12 col-md-8">
                  <div className="card mb-3 gradient-effect p-3 text-light rounded-5" role="button">
                      <div className='circle--primary' />
                      <div className='circle--secondary w-25' />
                      <div className='circle--ternary w-25' />
                      <div className="card-body">
                        <ol className="list-unstyled">
                                        <li>
                                            <FontAwesomeIcon className="text-info mx-1" icon={faUser} size="1x" />
                                            Jugador Carry “NovaMaster” - Contrato de patrocinio exclusivo disponible, potencial de alcance 2M + fans
                                        </li>
                                        <li className=''>
                                            <FontAwesomeIcon className="text-secondary mx-1" icon={faRankingStar} size="1x" />
                                            Torneo “Legends Cup” - Derechos de transmisión disponibles, audiencia esperada: 500k + espectadores
                                        </li>
                                        <li className=''>
                                            <FontAwesomeIcon className="text-danger mx-1" icon={faAnchor} size="1x" />
                                            Hay 5 perfiles Support de tu interes con un Win Rate 87%
                                        </li>
                                        </ol>
                      </div>
                  </div>
                  <div className='col-12'>
                      <div className="row g-2">
                      <div className="col-12 col-md-2 mb-3">
                         <h5 className="fs-3 text-light fw-bold">Top 3</h5>
                      </div>
                      <div className="col-md-auto col">
                          <button type="button" className="btn btn-primary rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="text-white mx-1" icon={faKhanda} size="1x" />
                              Carry
                          </button>
                      </div>
                      <div className="col-md-auto col">
                          <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faPlus} size="1x" />
                              Support
                          </button>
                      </div>
                      <div className="col-md-auto col">
                        <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faBorderTopLeft} size="1x" />
                              Top
                          </button>
                      </div>
                      <div className="col-md-auto col">
                        <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faWind} size="1x" />
                              Jungle
                          </button>
                      </div>
                      <div className="col-md-auto col">
                        <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faMagento} size="1x" />
                              Mid
                          </button>
                      </div>
                  </div>
                  </div>
                  <div className="col-12">
                      <TopPlayer src={Player} />
                      <TopPlayer src={Player} name="Kovalco" />
                      <TopPlayer src={Player} name="Kovalco" />
                  </div>
                  <div className="col-md-3 offset-md-9">
                    <div role="button"  onClick={() => navigate(RoutingPath.talentSearch)} className="bg-transparent b-0 p-0  d-flex align-items-center justify-content-end">
                        <img className='img-fluid rounded-3 bg-dark w-50' src={PlayersAvatar} alt="Ver mas"/>
                        <span className='text-gray h5'>Ver más</span>
                    </div>
                  </div>
              </div>

              <div className="col-12 col-md-3">
                  <div className='col-12 col-md-12 mb-3'>
                      <div className="p-3 bg-primary rounded-5">
                          <div className="row align-items-center g-2">
                              <div className="col-12 col-md-12 text-light">
                                  <p className='fs-5 fw-bold mb-1'>ROI Patrocinios</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-warning mx-1" icon={faCartPlus} size="1x" />
                                          215%
                                      </li>
                                      <li>
                                      <small className='text-gray'>Basado en contrato de los ultimos 12 meses</small>

                                      </li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-12 col-md-12 mb-3'>
                      <div className="p-3 bg-primary rounded-5">
                          <div className="row align-items-center g-2">
                              <div className="col-12 col-md-12 text-light">
                                  <p className='fs-5 fw-bold mb-1'>Valor del Pase Total</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-secondary mx-1" icon={faMoneyBill} size="1x" />
                                          $3.2M
                                      </li>
                                      <li>
                                      <small className='text-gray'>Proyección anual de talento descubierto</small>

                                      </li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-12 col-md-12 mb-3'>
                      <div className="p-3 bg-primary rounded-5">
                          <div className="row align-items-center g-2">
                              <div className="col-12 col-md-12 text-light">
                                  <p className='fs-5 fw-bold mb-1'>Talento Elite Disponible</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-white mx-1" icon={faPeopleGroup} size="1x" />
                                          127
                                      </li>
                                      <li>
                                      <small className='text-gray'>37% de incremento vs Q anterior</small>

                                      </li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          </div>

          </div></>
  );
};

export default DashboardHunter;