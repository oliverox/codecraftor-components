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
  children: {
    type: 'string',
    default: 'Sample button'
  },
  props: {
    intent: {
      type: ['none', 'primary', 'success', 'warning', 'danger'],
      default: 'none'
    },
    disabled: {
      type: 'boolean',
      default: false
    },
    minimal: {
      type: 'boolean',
      default: false
    },
    large: {
      type: 'boolean',
      default: false
    },
    icon: {
      type: 'string',
      default: false
    }
  }
}