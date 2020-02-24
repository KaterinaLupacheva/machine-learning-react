import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

import './sidebar.styles.scss';

const Sidebar = () => (
  <div className="sidebar-container">
    <ul>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faQrcode} />
          Dashboard
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
