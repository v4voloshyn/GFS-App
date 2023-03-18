/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  buttonText: string | ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  buttonText = 'Click me',
  onClick,
}) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      <span className="button__text">{buttonText}</span>
    </button>
  );
};
