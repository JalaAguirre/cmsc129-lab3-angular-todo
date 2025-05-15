export interface Task {
  id?: number;
  name: string;
  date: string;
  time: string;
  priority: 'High' | 'Medium' | 'Low';
  done?: boolean;
}

interface TaskList {
  tasks: Task[];
}