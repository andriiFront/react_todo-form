import React, { useContext } from 'react';
import { AlertContext } from '../context/Alert/alertContext';
import { CSSTransition } from 'react-transition-group'

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  
  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 600, exit: 500 }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Внимание!</strong>
        &nbsp;{alert.text}
        <button
          onClick={hide}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </CSSTransition>
    
  );
};

