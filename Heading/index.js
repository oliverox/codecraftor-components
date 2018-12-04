import React from 'react';
import Heading from './Heading';
import defaultStyles from './defaultStyles.module.css';

class HeadingComponent extends React.Component {
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
    const { text, type, className, style } = this.props;
    const { devStyles } = this.state;
    let cn = `${defaultStyles.default} ${className}`;
    if (devStyles) {
      cn = `${cn} ${devStyles}`;
    }
    return <Heading style={style} className={cn} text={text} type={type} />;
  }
}

export default HeadingComponent;

HeadingComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  type: 'h1',
  text: 'Edit this heading'
};
