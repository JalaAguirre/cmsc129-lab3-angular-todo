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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log('Loaded tasks:', tasks); // Check if ID=2 exists
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    console.log('Deleting task with ID:', task.id, 'Type:', typeof task.id);
    this.taskService.deleteTask(task).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
        // Option 1: Remove from local state anyway (optimistic update)
        // this.tasks = this.tasks.filter(t => t.id !== task.id);
        
        // Option 2: Show error message
        alert('Failed to delete task. Please try again.');
      }
    });
  }

  addTask(task: Task) {
    console.log('Adding task:', task);
    this.taskService.addTask(task).subscribe((newTask: Task) => {
      this.tasks.push(newTask);
    });
  }
}

