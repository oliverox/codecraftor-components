import React from 'react';
import PageHeader from './PageHeader';

const PageHeaderComponent = ({
  theme,
  nav,
  title,
  showTitle,
  showNavigationMenu,
  fontStyle,
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
    <PageHeader
      nav={nav}
      title={title}
      style={styles}
      showTitle={showTitle}
      showNavigationMenu={showNavigationMenu}
    />
  );
};

PageHeaderComponent.defaultProps = {
  title: 'Company Inc.',
  nav: [
    {
      label: 'Home',
      goto: '#'
    },
    {
      label: 'Team',
      goto: '#'
    },
    {
      label: 'About',
      goto: '#'
    }
  ],
  showTitle: true,
  showNavigationMenu: true,
  fontStyle: 'dark',
  backgroundStyle: 'background'
};

export default {
  module: PageHeaderComponent,
  defaultProps: PageHeaderComponent.defaultProps
};
