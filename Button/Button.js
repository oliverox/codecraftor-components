import React from 'react';
import { Link } from 'react-router-dom';

export default ({ linkTo, style, className, text }) => (
  <Link to={linkTo}>
    <button style={style} className={className}>
      {text}
    </button>
  </Link>
);
