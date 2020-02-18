import React from 'react';
import MenuButton from '../menu-button/menu-button.component';
import {ReactComponent as TelecomIcon} from '../../assets/page1-icons/telecom-icon.svg';
import {ReactComponent as CartIcon} from '../../assets/page1-icons/cart-icon.svg';
import {ReactComponent as HealthcareIcon} from '../../assets/page1-icons/healthcare-icon.svg';
import {ReactComponent as BankingIcon} from '../../assets/page1-icons/banking-icon.svg';
import {ReactComponent as FactoryIcon} from '../../assets/page1-icons/factory-icon.svg';
import './menu.styles.scss';

const Menu = () => (
    <div className='menu-container'>
        <div className='menu-item'>
            <TelecomIcon className='icon'/>
            <MenuButton>{'Telecom'}</MenuButton>
        </div>
        <div className='menu-item'>
            <CartIcon className='icon'/>
            <MenuButton>{'Retail'}</MenuButton>
        </div>
        <div className='menu-item'>
            <HealthcareIcon className='icon'/>
            <MenuButton>{'Healthcare'}</MenuButton>
        </div>
        <div className='menu-item'>
            <BankingIcon className='icon'/>
            <MenuButton>{'Banking'}</MenuButton>
        </div>
        <div className='menu-item'>
            <FactoryIcon className='icon'/>
            <MenuButton>{'Supply Chain'}</MenuButton>
        </div>
    </div>
);

export default Menu;