import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import initialTasks from './tasksData.json';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
