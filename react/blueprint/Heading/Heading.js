import React from 'react';
import { H1, H2, H3, H4, H5 } from '@blueprintjs/core';

class Heading extends React.Component {
  render() {
    const { type, children } = this.props;
    switch (type) {
      case 'H1':
        return <H1>{children}</H1>;
      case 'H2':
        return <H2>{children}</H2>;
      case 'H3':
        return <H3>{children}</H3>;
      case 'H4':
        return <H4>{children}</H4>;
      case 'H5':
        return <H5>{children}</H5>;
      default:
        throw new Error('Invalid Heading type');
    }
  }
}

export default {
  name: 'Heading',
  icon: 'header',
  description: 'A heading component',
  component: Heading,
}
