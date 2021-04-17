interface IButtonProps {
  color?: string;
  text: string;
}

const Button = ({ color = 'steelblue', text }: IButtonProps): JSX.Element => {
  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

export default Button;
