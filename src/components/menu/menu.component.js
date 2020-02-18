import React from 'react';

import {ReactComponent as TelecomIcon} from '../../assets/page1-icons/telecom-icon.svg';
import './menu.styles.scss';

const Menu = () => (
    <div className='menu-container'>
        <div className='menu-item'>
            <TelecomIcon className='telecom-icon'/>
        </div>
    </div>
);

export default Menu;