import Button from './Button';

type HeaderProps = { title: string } & typeof defaultProps;
const defaultProps = {
  title: 'Task Tracker',
};

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' />
    </header>
  );
};
Header.defaultProps = defaultProps;
export default Header;
