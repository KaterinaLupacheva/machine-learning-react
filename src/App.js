import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import MlNamesPage from './pages/ml-names-page/ml-names-page.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/ml-names' component={MlNamesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
