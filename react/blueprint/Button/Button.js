import React from 'react';
import { Button as ButtonBP } from '@blueprintjs/core';

class Button extends React.Component {
  render() {
    const {
      children,
      intent = 'none',
      disabled = false,
      minimal = false,
      large = false,
      icon = false,
      ...otherProps
    } = this.props;

    return (
      <ButtonBP
        intent={intent}
        disabled={disabled}
        minimal={minimal}
        large={large}
        icon={icon}
        {...otherProps}
      >
        {children}
      </ButtonBP>
    );
  }
}

export default {
  component: Button,
  icon: 'widget-button',
  label: 'Button',
  description: 'A button component',
  props: {
    children: {
      type: 'string',
      default: 'Default button'
    },
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
      default: ''
    }
  }
};
