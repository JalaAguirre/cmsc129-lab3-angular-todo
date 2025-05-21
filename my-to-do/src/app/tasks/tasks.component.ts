import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskItemComponent } from '../task-item/task-item.component';

import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,
            TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  originalTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log('Loaded tasks:', tasks);
      this.tasks = tasks;
      this.originalTasks = [...tasks];
    });
  }

  deleteTask(task: Task) {
    console.log('Deleting task with ID:', task.id, 'Type:', typeof task.id);
    this.taskService.deleteTask(task).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.originalTasks = this.originalTasks.filter(t => t.id !== task.id);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
        alert('Failed to delete task. Please try again.');
      }
    });
  }

  addTask(task: Task) {
    console.log('Adding task:', task);
    this.taskService.addTask(task).subscribe((newTask: Task) => {
      this.tasks.push(newTask);
      this.originalTasks.push(newTask);
    });
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    this.originalTasks = this.originalTasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
  }
  
  onSortChange(sortType: string) {
    let tasksToSort = [...this.tasks];
    
    switch(sortType) {
      case 'dateadded':
        tasksToSort.sort((a, b) => {
          const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
          const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
          return dateA - dateB;
        });
        break;
        
      case 'duedate':
        tasksToSort.sort((a, b) => {
          // Handle cases where date or time might be missing
          const dateA = a.date ? this.parseDueDate(a.date, a.time) : 0;
          const dateB = b.date ? this.parseDueDate(b.date, b.time) : 0;
          return dateA - dateB;
        });
        break;
        
      case 'prio':
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        tasksToSort.sort((a, b) => 
          (priorityOrder[a.priority] || 0) - (priorityOrder[b.priority] || 0)
        );
        break;
        
      default:
        tasksToSort = [...this.originalTasks];
    }
    
    this.tasks = tasksToSort;
  }

  // Helper method to parse due dates consistently
  private parseDueDate(dateString: string, timeString?: string): number {
    try {
      const date = new Date(dateString);
      
      if (timeString) {
        const timeParts = timeString.split(':');
        if (timeParts.length >= 2) {
          date.setHours(
            parseInt(timeParts[0], 10),
            parseInt(timeParts[1], 10),
            0, 0
          );
        }
      } else {
        // Default to end of day if no time specified
        date.setHours(23, 59, 59, 999);
      }
      
      return date.getTime();
    } catch (e) {
      console.error('Error parsing date:', e);
      return 0;
    }
  }
}

