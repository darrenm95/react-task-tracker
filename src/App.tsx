import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

interface Task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
];

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
