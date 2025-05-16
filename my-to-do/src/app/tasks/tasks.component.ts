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

  ngOnInit(): void{
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks loaded:', tasks); // Verify in console
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      }
    });
  }

  // Fix the syntax error and add proper method
  addTask(task: Task) {
    console.log('Adding task:', task);
    // Add your task service call here
    this.taskService.addTask(task).subscribe(newTask => {
      this.tasks.push(newTask);
    });
  }
}

