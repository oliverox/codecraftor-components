import React from 'react';
import { Button as ButtonBP } from '@blueprintjs/core';

class Button extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <ButtonBP {...otherProps}>{children}</ButtonBP>
  }
}

export default {
  childNodes: [],
  label: 'Button',
  component: Button,
  icon: 'widget-button',
  childText: 'Sample button',
  description: 'A button component',
}