import React from 'react';
import { Button as ButtonBP } from '@blueprintjs/core';

class Button extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <ButtonBP {...otherProps}>{children}</ButtonBP>
  }
}

export default {
  name: 'Button',
  icon: 'widget-button',
  description: 'A button component',
  component: Button,
}
