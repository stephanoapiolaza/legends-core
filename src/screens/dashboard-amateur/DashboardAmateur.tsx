import React, { useState, useEffect } from 'react';
import Dota from '../../assets/dota.png';
import Alconte from '../../assets/ranking-alconte.png';
import Profile from '../../assets/profile.png';
import Sniper from '../../assets/sniper.png';
import Kratos from '../../assets/kratos.png';
import Player from '../../assets/player.png';
import Phantom from '../../assets/phantom-assassin.png';
import Juggernaut from '../../assets/juggernaut.png';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import PlayerSkillsRadarChart from 'components/PlayerSkillsRadarChart';
import PlayerSearchBar from 'components/PlayerSearchBar';
import { faAnglesUp, faBell, faBoltLightning, faBuildingShield, faBullseye, faDumbbell, faFire, faMedal, faPeace, faPeopleGroup, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/Avatar';
import { Carousel } from 'react-bootstrap';
import { faInstagram, faTiktok, faTwitch } from '@fortawesome/free-brands-svg-icons';
import TopCompare from 'components/TopCompare';
import MoreInfo from './MoreInfo';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white', // Cambia el color del texto de la leyenda
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white', // Cambia el color de las etiquetas del eje X
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)', // Color de las líneas de la cuadrícula del eje X
      },
    },
    y: {
      ticks: {
        color: 'white', // Cambia el color de las etiquetas del eje Y
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)', // Color de las líneas de la cuadrícula del eje Y
      },
    },
  },
};

const DashboardAmateur = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
    const [playerData, setPlayerData] = useState({
        name: 'dyurin',
        loyalty: 10000,
        mmr: 3000,
        weeklyPlaytime: 10,
        topHeroes: [
          { name: 'Sniper', image: Sniper}, 
          { name: 'Phantom', image: Phantom},
          { name: 'Juggernaut', image: Juggernaut}
          ]
      });
    
      const chartData = {
        labels: ['01/24', '03/24', '06/24', '09/24'],
        datasets: [
          {
            label: 'EXP/Min',
            data: [20, 25, 22, 30],
            borderColor: 'rgb(157, 148, 192)',
            tension: 0.1
          },
          {
            label: 'Oro/Min',
            data: [400, 450, 425, 500],
            borderColor: 'rgb(166, 208, 188)',
            tension: 0.1
          },
          {
            label: 'Daño',
            data: [8000, 8690, 3490, 7690],
            borderColor: 'rgb(249, 219, 161)',
            tension: 0.1
          },
          {
            label: 'Defensa',
            data: [4000, 4500, 3200, 1600],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          },
          {
            label: 'Heal',
            data: [15000, 16200, 14800, 13000],
            borderColor: 'rgb(209, 226, 18)',
            tension: 0.1
          }
        ]
      };
    const [show, setShow] = useState(false);
    
    const toggleMoreInfo = async (active: boolean = false) => {
        setShow(active);
    }

  return (
    <><div className="row mt-1 mb-5 align-items-center g-2 g-lg-0">
        <div className="col-12">
            <MoreInfo show={show} setShow={toggleMoreInfo} />
        </div>
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
      </div><div className="row mb-3 align-items-center g-2">
              <div className="col-12 col-md-8">
                  <span className="badge bg-info p-3 rounded-4 fs-8">Loyalty Bronze #{playerData.loyalty}</span>
              </div>
              <div className="col-md-auto">
                  <div className="row g-2 g-lg-2">
                      <div className="col">
                          <button type="button" className="btn btn-primary rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="text-white mx-1" icon={faDumbbell} size="1x" />
                              Entrenar
                          </button>
                      </div>
                      <div className="col">
                          <button type="button" className="btn btn-outline-secondary rounded-pill pt-2 pb-2  d-flex align-items-center">
                              <FontAwesomeIcon className="text-white mx-1" icon={faPeopleGroup} size="1x" />
                              Matchmaking
                          </button>
                      </div>
                      <div className="col">
                          <button type="button" className="btn btn-outline-warning rounded-pill pt-2 pb-2" onClick={() => toggleMoreInfo(true)}>
                            Más info
                            </button>
                      </div>
                  </div>

              </div>
          </div><div className="row gx-2">
              <div className="col-12 col-md-3">
                  <div className="p-3 bg-primary rounded-5">
                      <div className="row align-items-center g-2 g-md-5">
                          <div className="col-12 col-md-3">
                              <img src={Profile} className="rounded mx-3" alt="Dyurin nickname" />
                          </div>
                          <div className="col-12 col-md-9">
                              <p className='text-light fs-7 mb-0'>Tu perfil más adecuado es Support</p>
                              <small className='text-gray'>30 partidas haz jugado</small>
                          </div>
                      </div>
                  </div>
                  <div className="p-3 bg-primary rounded-5 mt-3">
                      <div className="row align-items-center g-2">
                          <div className="col-12 col-md-9 text-light">
                              <p className='fs-8 mb-0'><span className="fw-bold"></span> Ranking Divino - MMR {playerData.mmr}</p>
                              <p className='fs-12'><span className="fw-bold fs-5">Potencial</span> <br />Ancestro - MMR 4000</p>
                          </div>
                          <div className="col-12 col-md-3 text-center">
                              <img src={Alconte} className="img-fluid" alt="Ranking Alconte" />
                          </div>
                      </div>
                  </div>
                  <div className="p-3 bg-primary rounded-5 mt-3 mb-3">
                      <div className="row align-items-center">
                          <div className="col-12 text-light d-flex align-items-center">
                              <h1 className='display-1 text-secondary me-3'>{playerData.weeklyPlaytime}</h1>
                              <h3 className='fs-5'>Horas Promedio Semanal</h3>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12 col-md-6">
                  <div className="card mb-3 card--graph rounded-5">
                      <div className="card-body">
                          <h5 className="card-title text-light">Evolución del Jugador</h5>
                          <Line data={chartData} options={options} />
                      </div>
                  </div>
              </div>
              <div className="col-12 col-md-3">
                  <div className='col-12 col-md-12 mb-3'>
                      <div className="p-3 bg-primary rounded-5">
                          <div className="row align-items-center g-2">
                              <div className="col-12 col-md-12 text-light">
                                  <p className='fs-5 fw-bold mb-1'>Proximos Eventos</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-info mx-1" icon={faDumbbell} size="1x" />
                                          Sesion coaching: 15/06
                                      </li>
                                      <li>
                                          <FontAwesomeIcon className="text-secondary mx-1" icon={faRankingStar} size="1x" />
                                          Torneo Amateur LATAM: 22/06
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
                                  <p className='fs-5 fw-bold mb-1'>Objetivos</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-danger mx-1" icon={faBullseye} size="1x" />
                                          Alcanzar MMR 4000
                                      </li>
                                      <li>
                                          <FontAwesomeIcon className="text-yellow mx-1" icon={faMedal} size="1x" />
                                          Ganar Torneo Amateur
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className='col-12 col-md-12'>
                      <div className="p-3 bg-primary rounded-5">
                          <div className="row align-items-center g-2">
                              <div className="col-12 col-md-12 text-light">
                                  <p className='fs-5 fw-bold mb-1'>Recomendaciones de Mejora</p>
                                  <ol className="list-unstyled">
                                      <li>
                                          <FontAwesomeIcon className="text-warning mx-1" icon={faAnglesUp} size="1x" />
                                          Aumenta tu EXP/Min rotando más eficiente entre carriles
                                      </li>
                                      <li>
                                          <FontAwesomeIcon className="text-info mx-1" icon={faBuildingShield} size="1x" />
                                          Mejora tu posicionamiento en teamfights para aumentar Defensa promedio
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>

          </div><div className='row'>
              <div className='col-12'>
                  <h5 className="fs-3 text-light fw-bold">Engagement</h5>
              </div>
          </div><div className='row'>
              <div className="col-12 col-md-7">
                  <div className="card mb-3 gradient-effect p-3 rounded-5">
                      <div className='circle--primary' />
                      <div className='circle--secondary w-25' />
                      <div className='circle--ternary w-25' />
                      <div className="card-body">
                          <div className='row g-3'>
                              <div className="col">
                                  <span className="badge bg-primary p-2 px-3 rounded-pill fs-6">+17 visitas Gamer hunter</span>

                              </div>
                              <div className="col">
                                  <span className="badge bg-primary p-2 px-3 rounded-pill fs-6">+5 Torneos</span>

                              </div>
                              <div className="col">
                                  <span className="badge bg-primary p-2 px-3 rounded-pill fs-6">Campeon Regional</span>

                              </div>
                              <div className="col">

                                  <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                                      <FontAwesomeIcon className="mx-1" icon={faFire} size="1x" />
                                      Liderazgo
                                  </span>

                              </div>
                              <div className="col">

                                  <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                                      <FontAwesomeIcon className="mx-1" icon={faPeopleGroup} size="1x" />
                                      Trabajo Equipo
                                  </span>

                              </div>
                              <div className="col">
                                  <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                                      <FontAwesomeIcon className="mx-1" icon={faBoltLightning} size="1x" />
                                      +50 Rampage
                                  </span>
                              </div>
                              <div className="col">
                                  <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                                      <FontAwesomeIcon className="mx-1" icon={faPeace} size="1x" />
                                      Mediador
                                  </span>
                              </div>
                              <div className="col-12 col-md-7">
                                  <div className="btn-group d-flex flex-row" role="group" aria-label="Redes Sociales">
                                      <button type="button" className="btn bg-white text-dark" onClick={() => window.open("http://instagram.com", "_blank")}>
                                          <FontAwesomeIcon className="mx-1 text-info" icon={faInstagram} size="1x" />
                                          +98 Fans
                                      </button>
                                      <button type="button" className="btn bg-white text-dark" onClick={() => window.open("https://www.twitch.tv/", "_blank")}>
                                          <FontAwesomeIcon className="mx-1 text-secondary" icon={faTwitch} size="1x" />
                                          15K Seguidores
                                      </button>
                                      <button type="button" className="btn bg-white text-dark" onClick={() => window.open("http://tiktok.com", "_blank")}>
                                          <FontAwesomeIcon className="mx-1 text-primary" icon={faTiktok} size="1x" />
                                          30K Fans
                                      </button>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-12'>
                      <h5 className="fs-3 text-light fw-bold">10% Comparativa</h5>
                  </div>
                  <div className="col-12">
                      <TopCompare src={Player} />
                      <TopCompare src={Player} name="Kovalco" />
                  </div>
              </div>
              <div className="col-12 col-md-5">
                  <div className="card p-3 rounded-5">
                      <div className="card-body">
                          <div className="row">
                              <div className="col-12 col-md-10 z-2">
                                  <p className='fs-5 fw-semibold text-gray mb-0'>Progreso Habilidades</p>
                                  <h5 className="fs-3 card-title text-light fw-bold">Heroes más jugados</h5>
                                  <div style={{ minHeight: '10rem' }}>
                                      <Carousel interval={5000} controls={false}>
                                          <Carousel.Item>
                                              <div className="d-flex justify-content-between d-block w-100">
                                                  {playerData.topHeroes.map((hero, index) => (
                                                      <Avatar name={hero.name} key={index} className="mx-2" src={hero.image} />
                                                  ))}
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className="d-flex justify-content-between">
                                                  {playerData.topHeroes.map((hero, index) => (
                                                      <Avatar name={hero.name} key={index} className="mx-2" src={hero.image} />
                                                  ))}
                                              </div>
                                          </Carousel.Item>
                                      </Carousel>
                                  </div>
                                  <div className="d-flex flex-row z-2">
                                      <PlayerSkillsRadarChart />
                                  </div>
                              </div>
                              <div className="col-12 col-md-2">
                                  <img className='opacity-75 img-fluid position-absolute bottom-0 end-0' src={Kratos} alt="Kratos" style={{ maxHeight: '70%', zIndex: 0 }} />
                              </div>
                          </div>

                      </div>

                  </div>

              </div>


          </div></>
  );
};

export default DashboardAmateur;