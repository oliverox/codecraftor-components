import React from 'react';
import MasterContainer from './MasterContainer';
import defaultStyles from './defaultStyles.module.css';

class MasterContainerComponent extends React.Component {
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
      <MasterContainer style={style} className={cn}>
        {children}
      </MasterContainer>
    );
  }
}

export default MasterContainerComponent;

MasterContainerComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  children: []
};
