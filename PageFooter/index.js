import React from 'react';
import PageFooter from './PageFooter';

const PageFooterComponent = ({
  theme,
  fontStyle,
  footerText,
  backgroundStyle
}) => {
  let styles = {};
  if (fontStyle) {
    styles.color = theme.colors[fontStyle];
  }
  if (backgroundStyle) {
    styles.backgroundColor = theme.colors[backgroundStyle];
  }
  return (
    <PageFooter style={styles} footerText={footerText} />
  );
};

PageFooterComponent.defaultProps = {
  footerText: '© 2019 Codecraftor',
  fontStyle: 'light',
  backgroundStyle: 'dark'
};

export default {
  module: PageFooterComponent,
  defaultProps: PageFooterComponent.defaultProps
};
