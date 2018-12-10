import React from 'react';
import Button from './Button';
import defaultStyles from './defaultStyles.module.css';

class ButtonComponent extends React.Component {
  render() {
    const { linkTo, className, style, text, useContainerWidth } = this.props;
    let cn = defaultStyles.default;
    let newStyles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    if (useContainerWidth) {
      newStyles.width = '100%';
    } else {
      newStyles.width = 'auto';
    }

    return (
      <Button
        linkTo={linkTo}
        style={Object.assign(newStyles, style)}
        className={cn}
        text={text}
      />
    );
  }
}

ButtonComponent.defaultProps = {
  linkTo: '#',
  className: '',
  style: {},
  text: 'Click me...',
  useContainerWidth: false
};

export default {
  module: ButtonComponent,
  defaultProps: ButtonComponent.defaultProps
};
