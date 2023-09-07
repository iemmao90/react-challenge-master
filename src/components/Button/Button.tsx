import { PropsWithChildren } from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'shipped' | 'pending' | 'paid' | 'cancelled';
  onClick?: () => void;
}

export function Button({
  children,
  onClick,
  variant = 'pending',
}: PropsWithChildren<ButtonProps>) {
  const buttonStyle = {
    backgroundColor: `var(--${variant}-color)`,
  };

  return (
    <button className="color-button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
