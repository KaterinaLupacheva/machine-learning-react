import React from 'react';
import ML_MENU_DATA from './ml-menu.data';
import MlMenuOption from '../ml-menu-option/ml-menu-option.component';

import './ml-menu.styles.scss';

const MlMenu = () => (
  <div className="ml-menu-container">
    {ML_MENU_DATA.map(option => (
      <MlMenuOption option={option} key={option.id} />
    ))}
  </div>
);

export default MlMenu;
