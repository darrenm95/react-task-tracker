interface Task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

type OnDelete = (id: number) => void;
type OnToggle = (id: number) => void;

interface TasksProps {
  tasks: Task[];
  onDelete: OnDelete;
  onToggle: OnToggle;
}

interface TaskProp {
  task: Task;
  onDelete: OnDelete;
  onToggle: OnToggle;
}

interface ButtonProps {
  color?: string;
  text: string;
}

interface HeaderProps {
  title?: string;
}

type OnAdd = (task: NewTask) => void;

interface AddTaskProps {
  onAdd: OnAdd;
}

interface FormValues {
  text: string;
  day: string;
  reminder: boolean;
}
