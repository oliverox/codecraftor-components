import React from 'react';
import Span from './Span';
import defaultStyles from './defaultStyles.module.css';

class SpanComponent extends React.Component {
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
    const { text, className, style } = this.props;
    const { devStyles } = this.state;
    let cn = `${defaultStyles.default} ${className}`;
    if (devStyles) {
      cn = `${cn} ${devStyles}`;
    }
    return (
      <Span style={style} className={cn} text={text} />
    );
  }
}

export default SpanComponent;

SpanComponent.defaultProps = {
  devMode: false,
  className: '',
  style: {},
  text: ''
};
