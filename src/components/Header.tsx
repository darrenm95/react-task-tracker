import Button from './Button';

interface IHeaderProps {
  title?: string;
}

const Header = ({ title = 'Task Tracker' }: IHeaderProps): JSX.Element => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' />
    </header>
  );
};

export default Header;
