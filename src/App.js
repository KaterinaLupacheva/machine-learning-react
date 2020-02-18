import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
