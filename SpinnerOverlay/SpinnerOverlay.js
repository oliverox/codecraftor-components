import React from 'react';
import { Overlay, Spinner } from '@blueprintjs/core';
import './SpinnerOverlay.scss';

const SpinnerOverlay = ({
  isOpen = false,
  canEscapeKeyClose = false,
  canOutsideClickClose = false,
  size = Spinner.SIZE_LARGE,
  intent = 'primary'
}) => {
  return (
    <Overlay
      isOpen={isOpen}
      canEscapeKeyClose={canEscapeKeyClose}
      canOutsideClickClose={canOutsideClickClose}
    >
      <Spinner intent={intent} size={size} className="spinner" />
    </Overlay>
  );
};

export default SpinnerOverlay;
