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
      ...otherProps
    } = this.props;

    return (
      <ButtonBP
        intent={intent}
        disabled={disabled}
        minimal={minimal}
        large={large}
        {...otherProps}
        icon={false}
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
      type: ['None', 'Primary', 'Success', 'Warning', 'Danger'],
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
