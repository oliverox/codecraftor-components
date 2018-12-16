import React from 'react';
import RootContainer from './RootContainer';
import defaultStyles from './defaultStyles.module.css';

class RootContainerComponent extends React.Component {
  render() {
    const { children, className, style = {} } = this.props;
    let cn = defaultStyles.default;
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    return (
      <RootContainer style={style} className={cn}>
        {children}
      </RootContainer>
    );
  }
}


RootContainerComponent.defaultProps = {
  className: '',
  children: []
};

export default {
  module: RootContainerComponent,
  defaultProps: RootContainerComponent.defaultProps
}