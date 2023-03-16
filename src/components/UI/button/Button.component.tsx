/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  buttonText: string;
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
