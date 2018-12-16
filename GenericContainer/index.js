import React from 'react';
import GenericContainer from './GenericContainer';
import defaultStyles from './defaultStyles.module.css';

class GenericContainerComponent extends React.Component {
  render() {
    const { children, className, style, height } = this.props;
    let cn = defaultStyles.default;
    let newStyles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    if (height) {
      newStyles.height = `${height}px`;
    }
    return (
      <GenericContainer style={Object.assign(newStyles, style)} className={cn}>
        {children}
      </GenericContainer>
    );
  }
}

GenericContainerComponent.defaultProps = {
  className: '',
  style: {},
  children: 'Generic Container component'
};

export default {
  module: GenericContainerComponent,
  defaultProps: GenericContainerComponent.defaultProps
};
