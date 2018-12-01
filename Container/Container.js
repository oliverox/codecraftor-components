import React from 'react';

const Container = ({ children, className = '', style = {} }) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default Container;