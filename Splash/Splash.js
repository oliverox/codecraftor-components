import React from 'react';

export default ({
  theme,
  style,
  className,
  lineOneFontStyle,
  lineTwoFontStyle,
  marketingLineOne,
  marketingLineTwo,
  lineOneShadow,
  lineTwoShadow
}) => {
  let stylesLineOne = {};
  let stylesLineTwo = {};
  if (lineOneFontStyle) {
    stylesLineOne.color = theme.colors[lineOneFontStyle];
    if (lineOneShadow) {
    if (lineOneFontStyle === 'dark') {
      stylesLineOne.textShadow = `2px 2px 8px ${theme.colors.light}`;
    } else {
      stylesLineOne.textShadow = `2px 2px 8px ${theme.colors.dark}`;
    }}
  }
  if (lineTwoFontStyle) {
    stylesLineTwo.color = theme.colors[lineTwoFontStyle];
    if (lineTwoShadow) {
      if (lineTwoFontStyle === 'dark') {
        stylesLineTwo.textShadow = `2px 2px 8px ${theme.colors.light}`;
      } else {
        stylesLineTwo.textShadow = `2px 2px 8px ${theme.colors.dark}`;
      }
    }
  }
  return (
    <div style={style} className={className}>
      <h1 style={stylesLineOne}>{marketingLineOne}</h1>
      {marketingLineTwo && <h2 style={stylesLineTwo}>{marketingLineTwo}</h2>}
    </div>
  );
};
