
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const TopCompare = ({ name = 'Dendi 2024.£12', profile = 'Support', src = '😀', className ='' }) => {
  const navigate = useNavigate();
  return (
    <div className="card mb-3 gradient-effect p-2 text-center align-content-center rounded-5" role="button"
    onClick={() => navigate(RoutingPath.dashboardAmateur)}>
              <div className='circle--primary' />
              <div className='circle--secondary w-25' />
              <div className='circle--ternary w-25' />
              <div className="card-body">
                <div className='row g-3 align-content-center justify-content-center'>
                  <div className='col-2'>
                      <img className='img-fluid rounded-3 bg-dark' src={src} alt="Dendi"/>
                  </div>
                  <div className='col-3'>
                    <p className='fw-bold text-white'>{name}</p>
                    <span className="badge bg-primary p-2 px-3 rounded-pill fs-6">{profile}</span>
                  </div>
                  <div className='col-3'>
                    <p className='fs-5'>Setup</p>
                    <p className='fs-6'>Logitech 15.000 dpi</p>
                    <p className='fs-6'>AMD HD5800</p>
                  </div>
                  <div className='col-3'>
                    <p className='fs-6'>KDA 50/20/300</p>
                    <p className='fs-6'>AVG EXP x Min: 70</p>
                    <p className='fs-6'>AVG ORO x Min: 30</p>
                  </div>
                </div>
                </div>
            </div>
  );
};

export default TopCompare;


