import React from 'react';
import { FaTimes } from 'react-icons/fa';

type Task = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

type TaskProp = {
  task: Task;
  onDelete(id: number): void;
  onToggle(id: number): void;
};

const SingleTask = ({ task, onDelete, onToggle }: TaskProp): JSX.Element => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default SingleTask;
