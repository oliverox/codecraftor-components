import React from 'react';
import Text from './Text';
import defaultStyles from './defaultStyles.module.css';

class SpanComponent extends React.Component {
  render() {
    const { content, className, colorStyle, size, theme } = this.props;
    let cn = defaultStyles.default;
    let styles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    if (colorStyle) {
      styles.color = theme.colors[colorStyle];
    }
    if (size) {
      styles.fontSize = `${size}px`;
    }
    return <Text style={styles} className={cn} text={content} />;
  }
}

SpanComponent.defaultProps = {
  className: '',
  size: 16,
  colorStyle: 'dark',
  content: 'Edit this text...'
};

export default {
  module: SpanComponent,
  defaultProps: SpanComponent.defaultProps
};
