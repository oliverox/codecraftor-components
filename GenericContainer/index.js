import React from 'react';
import GenericContainer from './GenericContainer';
import defaultStyles from './defaultStyles.module.css';

class GenericContainerComponent extends React.Component {
  render() {
    const { children, className, style } = this.props;
    let cn = defaultStyles.default;
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    return (
      <GenericContainer style={style} className={cn}>
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
}
