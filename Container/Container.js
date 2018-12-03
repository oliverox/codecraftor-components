import React from 'react';

const Container = ({ children, className = '', style = {} }) => {
  const defaultStyle = {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff'
  };
  return (
    <div style={{ ...defaultStyle, ...style }} className={className}>
      {children}
    </div>
  );
};

export default Container;
