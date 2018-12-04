import React from 'react';

const Heading = ({ type, text, className, style }) => {
  let ComponentToRender = 'h1';
  switch (type.toLowerCase()) {
    case 'h1':
      ComponentToRender = 'h1';
      break;
    case 'h2':
      ComponentToRender = 'h2';
      break;

    case 'h3':
      ComponentToRender = 'h3';
      break;

    case 'h4':
      ComponentToRender = 'h4';
      break;

    case 'h5':
      ComponentToRender = 'h5';
      break;

    case 'h6':
      ComponentToRender = 'h6';
      break;

    default:
      break;
  }
  return (
    <ComponentToRender style={style} className={className}>
      {text}
    </ComponentToRender>
  );
};

export default Heading;
