import React from 'react';
import { Link } from 'react-router-dom';
import defaultStyle from './defaultStyles.module.css';

const PageHeader = ({ style, nav, showTitle, title, showNavigationMenu }) => {
  return (
    <div className={defaultStyle.pageHeader} style={style}>
      {showTitle && <div className={defaultStyle.pageHeaderTitle}>{title}</div>}
      {showNavigationMenu && (
        <ul className={defaultStyle.navMenu}>
          {nav.map((menu, key) => {
            return (
              <li key={key}>
                <Link to={menu.goto}>{menu.label}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PageHeader;
