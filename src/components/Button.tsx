const Button = ({
  color = 'steelblue',
  text,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      style={{ backgroundColor: color }}
      className='btn'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
