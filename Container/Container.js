import React from 'react';

if (process.env.NODE_ENV === 'development') {
  import('./styles.css');
}

const Container = ({ children, className = '', style = {} }) => {
  const devClassName = 'containerDev';
  const isDev = process.env.NODE_ENV === 'development';
  const defaultStyle = {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff'
  };
  return (
    <div
      style={{ ...defaultStyle, ...style }}
      className={`${className} ${isDev ? devClassName : ''}`}
    >
      {children}
    </div>
  );
};

export default Container;
