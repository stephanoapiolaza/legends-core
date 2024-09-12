import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {SecurityState} from "../store/security/state";
import PickGame from './pick-game/PickGame';
import GamingDashboard from './Home';
import DashboardAmateur from './dashboard-amateur/DashboardAmateur';
import DashboardHunter from './dashboard-hunter/DashboardHunter';
import TalentSearch from './talent-search/TalentSearch';

export const RoutingPath = {
  root: '/',
  dashboardAmateur: '/dashboard/amateur',
  dashboardHunter: '/dashboard/hunter',
  talentSearch: '/hunter/talents',
  login: '/login',
  notAuthorized: '/no-autorizado'
}

const Routing = () => {

  return (
    <SecurityState>
      <Router>
        <Routes>
          <Route path={RoutingPath.dashboardAmateur} element={<GamingDashboard><DashboardAmateur></DashboardAmateur></GamingDashboard>}/>
          <Route path={RoutingPath.dashboardHunter} element={<GamingDashboard><DashboardHunter></DashboardHunter></GamingDashboard>}/>
          <Route path={RoutingPath.root} element={<PickGame/>}/>
          <Route path={RoutingPath.talentSearch} element={<GamingDashboard><TalentSearch></TalentSearch></GamingDashboard>}/>
          <Route path="*" element={<PickGame />}/>
        </Routes>
      </Router>
    </SecurityState>
  );
}

export default Routing;
