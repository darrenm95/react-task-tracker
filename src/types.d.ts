interface Task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

interface TasksProps {
  tasks: Task[];
}

interface TaskProp {
  task: Task;
}

interface ButtonProps {
  color?: string;
  text: string;
}

interface HeaderProps {
  title?: string;
}
