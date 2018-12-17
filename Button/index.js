import React from 'react';
import Button from './Button';
import defaultStyles from './defaultStyles.module.css';

class ButtonComponent extends React.Component {
  render() {
    const {
      linkTo,
      className,
      text,
      useContainerWidth,
      backgroundStyle,
      fontStyle,
      size,
      theme
    } = this.props;
    let cn = defaultStyles.default;
    let styles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    if (useContainerWidth) {
      styles.width = '100%';
    } else {
      styles.width = 'auto';
    }
    if (backgroundStyle) {
      styles.backgroundColor = theme.colors[backgroundStyle]
    }
    if (fontStyle) {
      styles.color = theme.colors[fontStyle]
    }
    if (size) {
      styles.padding = `${size}px`;
    }
    return (
      <Button
        linkTo={linkTo}
        style={styles}
        className={cn}
        text={text}
      />
    );
  }
}

ButtonComponent.defaultProps = {
  linkTo: '#',
  className: '',
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
