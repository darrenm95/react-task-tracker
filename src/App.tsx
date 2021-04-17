import { useState } from 'react';
import initialTasks from './tasksData.json';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks);

  // Delete Task
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;
