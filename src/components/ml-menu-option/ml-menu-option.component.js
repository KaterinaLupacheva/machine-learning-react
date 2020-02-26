import React from 'react';

import './ml-menu-option.styles.scss';

const MlMenuOption = ({ option }) => (
  <div className="ml-menu-option">
    <option.icon className="option-icon" />
    <span className="option-name">{option.name}</span>
  </div>
);

export default MlMenuOption;
