import Avatar from 'components/Avatar';
    import React, { useState } from 'react';
import Profile from '../../assets/profile.png';
import Lol from '../../assets/lol.png';
import { Button, Modal } from 'react-bootstrap';
import { faClock, faCoins, faFire, faKhanda, faPlus, faRankingStar, faShield, faShieldHalved, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobaMap from './MobaMap';

const MoreInfo = ({ show = false, setShow = (toggle: false) => {}, className ='' }) => {

return (
    <>
    <Modal show={show} contentClassName='bg-primary text-light' size="xl" onHide={() => setShow(false)}>
        <Modal.Header className="border-0 me-5 mt-5" closeVariant="white" closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className='row container'>
                <div className='col-md-auto'>
                    <img src={Profile} style={{width: '10rem'}} className="rounded ms-3" alt="Duyurin" />
                </div>
                <div className='col-8'>
                    <p className='display-4 fw-bold text-light'>Duyurin</p>
                    <div className="row g-2">
                    <div className="col-md-auto col">
                        <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                            <FontAwesomeIcon className="mx-1" icon={faRankingStar} size="1x" />
                            Ranking MMR 3000
                        </span>
                      </div>
                      <div className="col-md-auto col">
                      <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                        <FontAwesomeIcon className="mx-1" icon={faFire} size="1x" />
                        Potencial MMR 3500
                    </span>
                      </div>
                      <div className="col-md-auto col">
                      <span className="badge bg-white text-dark p-2 px-3 rounded-pill fs-6">
                        <FontAwesomeIcon className="mx-1" icon={faClock} size="1x" />
                        10 horas AVG semanal
                    </span>
                      </div>
                    </div>
                </div>
                <div className='row g-2'>
                    <div className='col-md-auto text-center'>
                        <p className='fs-3 fw-bold text-light'>KDA</p>
                        <p className='display-5 fw-bold text-light'>30/20/100</p>
                    </div>
                    <div className='col text-center'>
                        <FontAwesomeIcon className="mx-1" icon={faShieldHalved} size="3x" />
                        <p className='fs-3 fw-bold text-light mb-0'>Avg DEF</p>
                        <p className='fs-1 fw-bold text-secondary'>33.000</p>
                    </div>
                    <div className='col text-center'>
                        <FontAwesomeIcon className="mx-1" icon={faKhanda} size="3x" />
                        <p className='fs-3 fw-bold text-light mb-0'>Avg Daño</p>
                        <p className='fs-1 fw-bold text-secondary'>10.000</p>
                    </div>
                    <div className='col text-center'>
                        <FontAwesomeIcon className="mx-1" icon={faPlus} size="3x" />
                        <p className='fs-3 fw-bold text-light mb-0'>Avg Heal</p>
                        <p className='fs-1 fw-bold text-secondary'>15.000</p>
                    </div>
                    <div className='col text-center'>
                        <FontAwesomeIcon className="mx-1" icon={faCoins} size="3x" />
                        <p className='fs-3 fw-bold text-light mb-0'>Avg Oro</p>
                        <p className='fs-1 fw-bold text-secondary'>10</p>
                    </div>
                    <div className='col text-center'>
                        <FontAwesomeIcon className="mx-1" icon={faStar} size="3x" />
                        <p className='fs-3 fw-bold text-light mb-0'>Avg Exp</p>
                        <p className='fs-1 fw-bold text-secondary'>50</p>
                    </div>
                </div>
                <div className='row g-2'>
                    <div className='col-12 col-md-6'>
                        <div className='col-12'>
                            <p className='fs-5 fw-bold text-light'>Comportamiento del Jugador</p>
                        </div>
                        <div className='row g-2'>
                            <div className='col-4'>
                                <p className='fs-7 text-light'>Abandono</p>
                                <p className='fs-7 fw-bold text-light'>33%</p>
                            </div>
                            <div className='col-4'>
                                <p className='fs-7 text-light'>Ping AVG</p>
                                <p className='fs-7 fw-bold text-light'>35ms</p>
                            </div>
                            <div className='col-4'>
                                <p className='fs-7 text-light'>Ubicacion</p>
                                <p className='fs-7 fw-bold text-light'>Santiago, Chile</p>
                            </div>
                        </div> 
                        <div className='row g-2'>
                            <div className='col-4'>
                                <p className='fs-7 text-light'>Denuncias</p>
                                <p className='fs-7 fw-bold text-light'>33.000</p>
                            </div>
                            <div className='col-4'>
                                <p className='fs-7 text-light'>Ping AVG</p>
                                <p className='fs-7 fw-bold text-light'>400ms</p>
                            </div>
                        </div> 
                    </div>
                    <div className='col-12 col-md-6'>
                        <p className='fs-5 fw-bold text-light'>Movimientos</p>
                        <MobaMap />
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    </>
);
}

export default MoreInfo;
