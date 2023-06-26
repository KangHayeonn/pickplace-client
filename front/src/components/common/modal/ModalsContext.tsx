import { createContext } from 'react';
import { ModalProps } from './ModalsProvider';

interface ModalsDispatchProps {
  open: (
    Component: React.ElementType,
    props: {
      onSubmit: () => Promise<void>;
    },
  ) => void;
  close: (Component: React.ElementType) => void;
}

export const ModalsStateContext = createContext<ModalProps[]>([]);
export const ModalsDispatchContext = createContext<ModalsDispatchProps>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});
