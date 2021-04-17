import Task from './Task';
const Tasks = ({ tasks, onDelete }: TasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
