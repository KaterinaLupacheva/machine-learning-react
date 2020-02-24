import React from 'react';
import SidebarOption from '../sidebar-option/sidebar-option.component';
import MENU_OPTIONS from './menu-options.data';

import './sidebar.styles.scss';

const Sidebar = () => (
  <div className="sidebar-container">
    <ul>
      {MENU_OPTIONS.map(option => (
        <SidebarOption key={option.id} icon={option.icon} name={option.name} />
      ))}
    </ul>
  </div>
);

export default Sidebar;