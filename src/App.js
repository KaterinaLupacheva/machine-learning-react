import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HamburgerMenuIcon from './components/hamburger-menu-icon/hamburger-menu-icon.component';
import Sidebar from './components/sidebar/sidebar.component';
import LandingPage from './pages/landing-page/landing-page.component';
import MlNamesPage from './pages/ml-names-page/ml-names-page.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HamburgerMenuIcon />
        <Sidebar>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/ml-names" component={MlNamesPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
