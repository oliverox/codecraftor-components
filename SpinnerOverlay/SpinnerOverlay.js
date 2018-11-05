import React from 'react';
import { Overlay, Spinner } from '@blueprintjs/core';
import './SpinnerOverlay.scss';

const SpinnerOverlay = ({
  display = false,
  canEscapeKeyClose = false,
  canOutsideClickClose = false,
  size = Spinner.SIZE_LARGE,
  intent = 'primary'
}) => {
  return (
    <Overlay
      className="overlay"
      isOpen={display}
      canEscapeKeyClose={canEscapeKeyClose}
      canOutsideClickClose={canOutsideClickClose}
    >
      <Spinner intent={intent} size={size} />
    </Overlay>
  );
};

export default SpinnerOverlay;
