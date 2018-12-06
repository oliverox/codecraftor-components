import React from 'react';

const Text = ({ text, className, style = {} }) => {
  return (
    <span style={style} className={className}>
      {text}
    </span>
  );
};

export default Text;
