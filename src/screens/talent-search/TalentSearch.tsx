import React, { useState, useEffect } from 'react';
import Dota from '../../assets/dota.png';
import PlayersAvatar from '../../assets/players-avatar.png';
import Sniper from '../../assets/sniper.png';
import Player from '../../assets/player.png';
import Phantom from '../../assets/phantom-assassin.png';
import Juggernaut from '../../assets/juggernaut.png';
import PlayerSearchBar from 'components/PlayerSearchBar';
import { faAnchor, faBell, faBorderTopLeft, faCartPlus, faClose, faFilter, faKhanda, faMoneyBill, faPeopleGroup, faPlus, faRankingStar, faTrophy, faUser, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagento } from '@fortawesome/free-brands-svg-icons';
import TopPlayer from 'components/TopPlayer';
import Talent from './Talent';

const TalentSearch = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
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
        <div className='row g-3'>
             <div className="col-12 text-end">
                        <span className="fs-5 text-light text-end">Filtros Aplicados</span  >
                        <FontAwesomeIcon className="text-light mx-2" icon={faFilter} size="1x" />
                </div> 
            <div className='col-12 text-end d-md-flex justify-content-end align-content-center'>
                <div className="col-md-auto col mx-2">
                          <button type="button" className="btn btn-primary rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="text-white mx-1" icon={faKhanda} size="1x" />
                              Carry
                              <FontAwesomeIcon className="text-gray mx-2" icon={faClose} size="1x" />
                          </button>
                      </div>
                      <div className="col-md-auto col mx-1">
                          <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faUser} size="1x" />
                              Dendi 2024.£12
                              <FontAwesomeIcon className="text-gray mx-2" icon={faClose} size="1x" />
                          </button>
                      </div>
                      <div className="col-md-auto col mx-1">
                        <button type="button" className="btn btn-warning rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faTrophy} size="1x" />
                              Win Rate 87%
                              <FontAwesomeIcon className="text-gray mx-2" icon={faClose} size="1x" />
                          </button>
                      </div>
                      <div className="col-md-auto col mx-1">
                        <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faWind} size="1x" />
                              Jungle
                              <FontAwesomeIcon className="text-gray mx-2" icon={faClose} size="1x" />
                          </button>
                      </div>
                      <div className="col-md-auto col mx-1">
                        <button type="button" className="btn btn-light rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="mx-1" icon={faMagento} size="1x" />
                              Mid
                              <FontAwesomeIcon className="text-gray mx-2" icon={faClose} size="1x" />
                          </button>
                      </div>
            </div>
            
                <div className="col-12">
                        <h6 className="fs-7 text-light text-end">4 Resultados encontrados</h6>
                </div> 
                <div className="row mb-3 align-items-center g-2">
              <div className="col-12 col-md-10">
                <h5 className="fs-3 text-light fw-bold">Talentos Disponibles</h5>
              </div>
                    <div className="col-md-auto">
                        <div className="row g-2 g-lg-2">
                            <div className="col">
                                    <button type="button" className="btn btn-secondary rounded-pill pt-2 pb-2 d-flex align-items-center">
                                    <FontAwesomeIcon className="mx-1" icon={faPeopleGroup} size="1x" />
                                    Armar Equipo
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                  <div className="col-12">
                      <Talent src={Player} />
                      <Talent src={Player} name="Kovalco" />
                      <Talent src={Player} name="Kimetsu" />
                      <Talent src={Player} name="MbaMoba" />
                      <Talent src={Player} name="Legends.2024" />
                  </div>

          </div>
          </div>

          </div></>
  );
};

export default TalentSearch;