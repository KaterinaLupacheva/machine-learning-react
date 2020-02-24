import React from 'react';
import HamburgerMenuIcon from '../../components/hamburger-menu-icon/hamburger-menu-icon.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './dashboard-page.styles.scss';

const DashboardPage = () => (
  <div className="dashboard-page">
    <HamburgerMenuIcon />
    <Sidebar />
  </div>
);

export default DashboardPage;
