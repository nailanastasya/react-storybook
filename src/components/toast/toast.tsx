import React from 'react';
import { ToastType, ToastSize } from './toast.type';

interface ToastProps {
  type: ToastType;
  size: ToastSize;
  message: string;
}

const Toast: React.FC<ToastProps> = ({ type, size, message }) => {
  return (
    <div className={`toast toast--${type} toast--${size}`}>
      {message}
    </div>
  );
};

export default Toast;