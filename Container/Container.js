import React from 'react';

export default ({ style, className, children}) => {
  return (
    <div
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
