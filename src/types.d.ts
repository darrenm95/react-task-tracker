interface Task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

type OnDelete = (id: number) => void;

interface TasksProps {
  tasks: Task[];
  onDelete: OnDelete;
}

interface TaskProp {
  task: Task;
  onDelete: OnDelete;
}

interface ButtonProps {
  color?: string;
  text: string;
}

interface HeaderProps {
  title?: string;
}
