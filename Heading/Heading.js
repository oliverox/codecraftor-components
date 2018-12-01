import React from 'react';

const Heading = ({
  type = 'h1',
  text = 'Edit this heading',
  className = '',
  style = {}
}) => {
  let ComponentToRender = 'H1';
  switch (type.toLowerCase()) {
    case 'H2':
      ComponentToRender = 'H2';
      break;

    case 'H3':
      ComponentToRender = 'H3';
      break;

    case 'H4':
      ComponentToRender = 'H4';
      break;

    case 'H5':
      ComponentToRender = 'H5';
      break;

    case 'H6':
      ComponentToRender = 'H6';
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
