import React from 'react';
import RootContainer from './RootContainer';
import defaultStyles from './defaultStyles.module.css';

class RootContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devStyles: false
    };
  }

  componentWillMount() {
    const { devMode } = this.props;
    if (devMode) {
      import('./devStyles.module.css').then(styles => {
        this.setState({
          devStyles: styles.dev
        });
      });
    }
  }

  render() {
    const { children, className, style } = this.props;
    const { devStyles } = this.state;
    let cn = `${defaultStyles.default} ${className}`;
    if (devStyles) {
      cn = `${cn} ${devStyles}`;
    }
    return (
      <RootContainer style={style} className={cn}>
        {children}
      </RootContainer>
    );
  }
}

export default RootContainerComponent;

RootContainerComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  children: []
};
