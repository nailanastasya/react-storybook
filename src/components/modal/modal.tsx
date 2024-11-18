import React from 'react';
import { ModalType, ModalSize } from './modal.type';

interface ModalProps {
  type: ModalType;
  size: ModalSize;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ type, size, children }) => {
  return (
    <div className={`modal modal--${type} modal--${size}`}>
      {children}
    </div>
  );
};

export default Modal;