import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './hamburger-menu-icon.styles.scss';

const HamburgerMenuIcon = () => (
  <>
    <input type="checkbox" id="check" />
    <label htmlFor="check">
      <FontAwesomeIcon icon={faBars} id="btn" />
      <FontAwesomeIcon icon={faTimes} id="cancel" />
    </label>
  </>
);

export default HamburgerMenuIcon;
