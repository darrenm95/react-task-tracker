import React from 'react';

type ButtonProps = {
  color?: string;
  text: string;
  onClick(): void;
};

const Button = ({
  color = 'steelblue',
  text,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      style={{ backgroundColor: color }}
      className='btn'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
