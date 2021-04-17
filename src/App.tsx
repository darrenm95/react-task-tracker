import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import initialTasks from './tasksData.json';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks);

  // Delete Task
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
