interface ITasksProps {
  tasks: {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  }[];
}

const Tasks = ({ tasks }: ITasksProps): JSX.Element => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
