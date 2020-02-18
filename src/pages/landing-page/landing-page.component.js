import React from 'react';
import Header from '../../components/header/header.component';
import Menu from '../../components/menu/menu.component';

import './landing-page.styles.scss';

const LandingPage = () => {

    return(
        <div className='landing-page-container'>
            <Header />
            <Menu />
        </div>
    )
};

export default LandingPage;