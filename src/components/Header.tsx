import Button from './Button';

const Header = ({ title = 'Task Tracker' }: HeaderProps): JSX.Element => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' />
    </header>
  );
};

export default Header;
