import React from 'react';
import SingleTask from './SingleTask';

type Task = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

type TasksProps = {
  tasks: Task[];
  onDelete(id: number): void;
  onToggle(id: number): void;
};

const Tasks = ({ tasks, onDelete, onToggle }: TasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
