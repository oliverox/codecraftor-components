import React from 'react';
import GenericContainer from './GenericContainer';
import defaultStyles from './defaultStyles.module.css';

class GenericContainerComponent extends React.Component {
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
      <GenericContainer style={style} className={cn}>
        {children}
      </GenericContainer>
    );
  }
}

export default GenericContainerComponent;

GenericContainerComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  children: 'Container component'
};
