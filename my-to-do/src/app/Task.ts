export interface Task {
  id?: string;
  name: string;
  date: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
  done?: boolean;
}

interface TaskList {
  tasks: Task[];
}