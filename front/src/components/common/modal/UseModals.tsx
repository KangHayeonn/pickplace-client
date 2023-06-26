import React, { useContext } from 'react';
import { ModalsDispatchContext } from './ModalsContext';

const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (
    Component: React.ElementType,
    props: {
      onSubmit: () => void;
    },
  ) => {
    document.body.style.overflow = 'hidden';
    open(Component, props);
  };

  const closeModal = (Component: React.ElementType) => {
    document.body.style.overflow = 'unset';
    close(Component);
  };

  return { openModal, closeModal };
};

export default useModals;
