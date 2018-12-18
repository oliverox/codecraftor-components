import React from 'react';
import GenericContainer from './GenericContainer';
import defaultStyles from './defaultStyles.module.css';

class GenericContainerComponent extends React.Component {
  render() {
    const {
      children,
      className,
      height,
      hAlign,
      vAlign,
      backgroundColor
    } = this.props;
    let cn = defaultStyles.default;
    let styles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }

    if (height) {
      styles.height = `${height}px`;
    }

    if (backgroundColor) {
      styles.backgroundColor = backgroundColor;
    }

    switch (hAlign) {
      case 'center':
        styles.justifyContent = 'center';
        break;

      case 'right':
        styles.justifyContent = 'flex-end';
        break;

      case 'left':
      default:
        styles.justifyContent = 'flex-start';
        break;
    }

    switch (vAlign) {
      case 'center':
        styles.alignItems = 'center';
        break;

      case 'bottom':
        styles.alignItems = 'flex-end';
        break;

      case 'top':
      default:
        styles.alignItems = 'flex-start';
        break;
    }

    return (
      <GenericContainer style={styles} className={cn}>
        {children}
      </GenericContainer>
    );
  }
}

GenericContainerComponent.defaultProps = {
  className: '',
  hAlign: 'left',
  vAlign: 'top',
  backgroundColor: 'transparent',
  children: 'Generic Container component'
};

export default {
  module: GenericContainerComponent,
  defaultProps: GenericContainerComponent.defaultProps
};
