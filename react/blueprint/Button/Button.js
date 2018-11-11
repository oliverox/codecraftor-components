import React from 'react';
import { Button as ButtonBP } from '@blueprintjs/core';

class Button extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <ButtonBP {...otherProps}>{children}</ButtonBP>
  }
}

export default {
  component: Button,
  icon: 'widget-button',
  label: 'Button',
  childNodes: [],
  childText: 'Sample button',
  description: 'A button component',
  configurable: {
    childText: 'string'
  }
}