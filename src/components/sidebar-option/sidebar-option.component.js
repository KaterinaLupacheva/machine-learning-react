import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar-option.styles.scss';

const SidebarOption = ({ icon, name }) => (
  <li>
    <a href="#">
      <FontAwesomeIcon icon={icon} />
      {name}
    </a>
  </li>
);

export default SidebarOption;
