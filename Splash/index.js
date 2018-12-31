import React from 'react';
import Splash from './Splash';
import defaultStyles from './defaultStyles.module.css';

class SplashComponent extends React.Component {
  render() {
    const {
      theme,
      className,
      height,
      hAlign,
      vAlign,
      backgroundStyle,
      showSplashImage,
      splashImageUrl,
      marketingLineOne,
      marketingLineTwo,
      lineOneFontStyle,
      lineTwoFontStyle
    } = this.props;
    let cn = defaultStyles.default;
    let styles = {};
    if (className.length > 0) {
      cn = `${cn} ${className}`;
    }

    if (height) {
      styles.height = `${height}px`;
    }

    switch (hAlign) {
      case 'center':
        styles.alignItems = 'center';
        break;

      case 'right':
        styles.alignItems = 'flex-end';
        break;

      case 'left':
      default:
        styles.alignItems = 'flex-start';
        break;
    }

    switch (vAlign) {
      case 'center':
        styles.justifyContent = 'center';
        break;

      case 'bottom':
        styles.justifyContent = 'flex-end';
        break;

      case 'top':
      default:
        styles.justifyContent = 'flex-start';
        break;
    }

    if (backgroundStyle) {
      styles.backgroundColor = theme.colors[backgroundStyle];
    }

    if (showSplashImage && splashImageUrl) {
      styles.backgroundImage = `url(${splashImageUrl})`;
      styles.backgroundSize = 'cover';
    }

    return (
      <Splash
        theme={theme}
        style={styles}
        className={cn}
        marketingLineOne={marketingLineOne}
        marketingLineTwo={marketingLineTwo}
        splashImageUrl={splashImageUrl}
        lineOneFontStyle={lineOneFontStyle}
        lineTwoFontStyle={lineTwoFontStyle}
      />
    );
  }
}

SplashComponent.defaultProps = {
  className: '',
  hAlign: 'left',
  vAlign: 'top',
  showSplashImage: true,
  backgroundStyle: 'primary',
  lineOneFontStyle: 'dark',
  lineTwoFontStyle: 'quaternary',
  lineOneShadow: true,
  lineTwoShadow: false,
  marketingLineOne: 'A Learning Farm',
  marketingLineTwo: 'We use agriculture to nourish brains and bellies.',
  splashImageUrl: 'https://i.ibb.co/ckPrbQy/max-1053152-unsplash.jpg'
};

export default {
  module: SplashComponent,
  defaultProps: SplashComponent.defaultProps
};
