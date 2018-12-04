import React from 'react';

import styles from './defaultStyles.module.css';

const Container = ({
  children,
  className = '',
  style = {},
  devMode = true
}) => {
  if (devMode) {
  }
  const devStyle = React.lazy(() => import('./devStyles.module.css'));
  let cn = `${styles.default} ${className}`;
  if (devMode) {
    cn = `${cn} ${devStyle.default.container}`
  }
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div
        style={{ ...style }}
        className={cn}
      >
        {children}
      </div>
    </React.Suspense>
  );
};

export default Container;
