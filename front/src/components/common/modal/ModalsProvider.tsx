import React, { useState } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from './ModalsContext';

export interface ModalsProviderProps {
  children: React.ReactNode;
}

export interface ModalProps {
  Component: React.ElementType;
  props: {
    onSubmit: () => Promise<void>;
  };
}

const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [isOpenModals, setIsOpenModals] = useState<ModalProps[]>([]);

  const open = (
    Component: React.ElementType,
    props: {
      onSubmit: () => Promise<void>;
    },
  ) => {
    setIsOpenModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: React.ElementType) => {
    setIsOpenModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = { open, close };

  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={isOpenModals}>
        {children}
      </ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  );
};

export default ModalsProvider;
