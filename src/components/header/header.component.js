import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Slogan from '../slogan/slogan.component';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className='logo-container'>
        <img src={logo} alt={'logo'} />
      </div>
      <div className="slogan-container">
        <Slogan />
      </div>
    </div>
  );
};

export default Header;
