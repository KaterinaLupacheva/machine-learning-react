import React from 'react';
import { Link } from 'react-router-dom';
import Slogan from '../slogan/slogan.component';
import { ReactComponent as HomeIcon } from '../../assets/page1-icons/home-icon.svg';
import { ReactComponent as GearIcon } from '../../assets/page1-icons/gear-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/page1-icons/login-icon.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="slogan-container">
        <Slogan />
      </div>
      <div className="options">
        <Link className="option" to="/">
          <HomeIcon className="home-icon" />
        </Link>
        <Link className="option" to="/">
          <GearIcon className="gear-icon" />
        </Link>
        <Link className="option" to="/login">
          <LoginIcon className="login-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
