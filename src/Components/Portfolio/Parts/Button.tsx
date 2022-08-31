import React from 'react'

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }: ButtonProps): JSX.Element => <button onClick={disabled ? undefined : onClick} disabled={disabled}>{label}</button>

