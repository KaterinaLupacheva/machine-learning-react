import React from 'react';
import SidebarOption from '../sidebar-option/sidebar-option.component';
import MENU_OPTIONS from './menu-options.data';

import './sidebar.styles.scss';

const Sidebar = ({ children }) => (
  <>
    <div className="sidebar-container">
      <header>{'J.A.R.V.I.S'}</header>
      <ul>
        {MENU_OPTIONS.map(option => (
          <SidebarOption key={option.id} icon={option.icon} name={option.name} />
        ))}
      </ul>
    </div>
    <section>{children}</section>
  </>
);

export default Sidebar;
