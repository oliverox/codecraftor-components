import React from 'react';

const Span = ({ text, className, style = {} }) => {
  return (
    <span style={style} className={className}>
      {text}
    </span>
  );
};

export default Span;
