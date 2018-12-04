import React from 'react';
import Container from './Container';
import defaultStyles from './defaultStyles.module.css';

class ContainerComponent extends React.Component {
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
      <Container style={style} className={cn}>
        {children}
      </Container>
    );
  }
}

export default ContainerComponent;

ContainerComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  children: 'Container component'
};
