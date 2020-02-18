import React from 'react';
import MenuButton from '../menu-button/menu-button.component';
import {ReactComponent as TelecomIcon} from '../../assets/page1-icons/telecom-icon.svg';
import {ReactComponent as CartIcon} from '../../assets/page1-icons/cart-icon.svg';
import './menu.styles.scss';

const Menu = () => (
    <div className='menu-container'>
        <div className='menu-item'>
            <TelecomIcon className='telecom-icon'/>
            <MenuButton>{'Telecom'}</MenuButton>
        </div>
        <div className='menu-item'>
            <CartIcon className='cart-icon'/>
            <MenuButton>{'Retail'}</MenuButton>
        </div>
    </div>
);

export default Menu;