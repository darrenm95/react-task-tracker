import Header from './components/Header';
import Tasks from './components/Tasks';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
