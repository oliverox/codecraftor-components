import React from 'react';
import Button from './Button';
import defaultStyles from './defaultStyles.module.css';

class ButtonComponent extends React.Component {
  render() {
    const {
      linkTo,
      className,
      style,
      text,
      useContainerWidth,
      backgroundStyle,
      fontStyle,
      size,
      theme
    } = this.props;
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
    if (backgroundStyle) {
      newStyles.backgroundColor = theme.colors[backgroundStyle]
    }
    if (fontStyle) {
      newStyles.color = theme.colors[fontStyle]
    }
    if (size) {
      newStyles.padding = `${size}px`;
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
  size: 10,
  fontStyle: 'dark',
  text: 'Default button',
  useContainerWidth: false,
  backgroundStyle: 'primary'
};

export default {
  module: ButtonComponent,
  defaultProps: ButtonComponent.defaultProps
};
