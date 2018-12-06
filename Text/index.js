import React from 'react';
import Text from './Text';
import defaultStyles from './defaultStyles.module.css';

class SpanComponent extends React.Component {
  render() {
    const { text, className, style } = this.props;
    let cn = defaultStyles.default;
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    return (
      <Text style={style} className={cn} text={text} />
    );
  }
}

SpanComponent.defaultProps = {
  className: '',
  style: {},
  text: ''
};

export default {
  module: SpanComponent,
  defaultProps: SpanComponent.defaultProps
};