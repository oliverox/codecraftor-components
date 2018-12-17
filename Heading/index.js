import React from 'react';
import Heading from './Heading';
import defaultStyles from './defaultStyles.module.css';

class HeadingComponent extends React.Component {
  render() {
    const { text, type, className } = this.props;
    let cn = defaultStyles.default;
    let styles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }
    return <Heading style={styles} className={cn} text={text} type={type} />;
  }
}

HeadingComponent.defaultProps = {
  className: '',
  type: 'h1',
  text: 'Edit this heading'
};

export default {
  module: HeadingComponent,
  defaultProps: HeadingComponent.defaultProps
};
