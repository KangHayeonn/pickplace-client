import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;

        const { onSubmit, ...restProps } = props;

        const onClose = () => {
          close(Component);
        };

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') {
            await onSubmit();
          }
          onClose();
        };

        return (
          <Component
            key={index}
            onClose={onClose}
            handleSubmit={handleSubmit}
            {...restProps}
          />
        );
      })}
    </>
  );
};

Modals.propTypes = {
  onSubmit: PropTypes.func,
};

export default Modals;
