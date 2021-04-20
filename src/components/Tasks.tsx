import Task from './Task';
import { ITask } from './TaskTracker';

type TasksProps = {
  tasks: ITask[];
  onDelete(id: number): void;
  onToggle(id: number): void;
};

const Tasks = ({ tasks, onDelete, onToggle }: TasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <Task
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
