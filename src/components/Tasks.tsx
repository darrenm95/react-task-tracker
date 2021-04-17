import Task from './Task';
const Tasks = ({ tasks }: TasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <Task />
      ))}
    </>
  );
};

export default Tasks;
