import React, { useState, useEffect } from 'react';
import './Home.scss';
import Marketing from '../assets/marketing.png';
import VerticalNavbar from 'components/VerticalNavbar';
import DashboardAmateur from './dashboard-amateur/DashboardAmateur';
import DashboardHunter from './dashboard-hunter/DashboardHunter';
import TalentSearch from './talent-search/TalentSearch';
import PickGame from './pick-game/PickGame';

const GamingDashboard = ({children}: any) => {
  

  return (
    <div className="container-fluid p-3">
      <div className="row g-3">
        <div className="col-12 col-md-1 d-none d-md-block m-0 p-0 justify-content-center mt-5">
        <VerticalNavbar />
        </div>
        <div className="col-12 col-md-10">
          {children}
        </div>
        <div className="d-none d-md-block col-12 col-md-1">
              <div className="col">
              <img className='img-fluid' src={Marketing} alt="Kratos"/>
              </div>
              <div className="col mt-3">
              <img className='img-fluid' src={Marketing} alt="Kratos"/>
              </div>
        </div>
      </div>
    </div>
    
  );
};

export default GamingDashboard;