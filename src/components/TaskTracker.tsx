import { useState } from 'react';
import initialTasks from '../tasksData.json';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';

export interface ITask {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const TaskTracker = (): JSX.Element => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  // Add Task
  const addTask = (newTask: ITask): void => {
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default TaskTracker;