import Task from './Task';
const Tasks = ({ tasks }: TasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
