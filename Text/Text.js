import React from 'react';

const Text = ({ text, className, style = {} }) => {
  return (
    <div style={{ margin: '10px'}}>
      <span style={style} className={className}>
        {text}
      </span>
    </div>
  );
};

export default Text;
