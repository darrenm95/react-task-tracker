import React from 'react';
import Button from './Button';

type HeaderProps = {
  title?: string;
  onAdd(): void;
  showAdd: boolean;
};

const Header = ({
  title = 'Task Tracker',
  onAdd,
  showAdd,
}: HeaderProps): JSX.Element => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
