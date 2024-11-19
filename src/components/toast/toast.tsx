import React from 'react';

export interface ToastProps {
  variant: 'success' | 'danger' | 'warning';
  size: 'small' | 'medium' | 'large';
  type: 'notification' | 'information';
  message: string;
  description?: string;
  time?: string;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  variant,
  size,
  type,
  message,
  description,
  time,
  onClose,
}) => {
  return (
    <div className={`toast toast--${variant} toast--${size}`}>
      <div className="toast__icon">
        {variant === 'success' && '✔'}
        {variant === 'danger' && '✖'}
        {variant === 'warning' && '⚠'}
        {type === 'notification' && '🔔'}
      </div>
      <div className="toast__content">
        <strong className="toast__message">{message}</strong>
        {description && <p className="toast__description">{description}</p>}
        {type === 'notification' && time && <p className="toast__time">{time}</p>}
      </div>
      {/* {onClose && (
        <button className="toast__close" onClick={onClose} aria-label="Close">
          
        </button>
      )} */}
    </div>
  );
};

export default Toast;
