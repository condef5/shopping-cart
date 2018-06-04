import React from 'react';

const Header = ({title, subtitle}) => (
  <div className="header">
    <h1 className="header__title">
      {title}
      {!subtitle ? null : <span className="header__sub-title">{subtitle}</span>}
    </h1>
  </div>
);

export default Header;
