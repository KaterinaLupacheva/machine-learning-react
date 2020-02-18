import React from 'react';
import { Link } from 'react-router-dom';
import Slogan from '../slogan/slogan.component';
import './header.styles.scss';

import homeIcon from '../../assets/page1-icons/home-icon.png';

const Header = () => {
    return(
        <div className='header'>
            <Slogan />
            <div className='options'>
                <Link className='option' to='/'>
                    <img src={homeIcon} alt='home-icon' />
                </Link>
            </div>
        </div>
    )
};

export default Header;