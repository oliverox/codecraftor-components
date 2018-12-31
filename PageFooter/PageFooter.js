import React from 'react';
import defaultStyle from './defaultStyles.module.css';

const PageFooter = ({ style, footerText }) => {
  return (
    <div className={defaultStyle.pageFooter} style={style}>
      <div className={defaultStyle.footerText}>{footerText}</div>
    </div>
  );
};

export default PageFooter;
