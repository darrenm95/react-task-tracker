type HeaderProps = { title: string } & typeof defaultProps;
const defaultProps = {
  title: 'Task Tracker',
};

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = defaultProps;
export default Header;
