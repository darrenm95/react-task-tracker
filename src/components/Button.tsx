const Button = ({ color = 'steelblue', text }: ButtonProps): JSX.Element => {
  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

export default Button;
