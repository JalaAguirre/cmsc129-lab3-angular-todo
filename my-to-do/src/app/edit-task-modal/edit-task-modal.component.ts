import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { Task } from '../Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-edit-task-modal',
  standalone: true, 
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './edit-task-modal.component.html',
  styleUrl: './edit-task-modal.component.css'
})
export class EditTaskModalComponent {
  name: string;
  date: string;
  time: string;
  priority: 'high' | 'medium' | 'low';

  constructor(
    public dialogRef: MatDialogRef<EditTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task },
    private taskService: TaskService
  ) {
    this.name = data.task.name;
    this.date = data.task.date;
    this.time = data.task.time;
    this.priority = data.task.priority;
  }

  onSubmit(): void {
    const updatedTask: Task = {
      ...this.data.task,
      name: this.name,
      date: this.date,
      time: this.time,
      priority: this.priority
    };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (task) => {
        this.dialogRef.close(task);
      },
      error: (err) => {
        console.error('Error updating task:', err);
      }
    });
  }
}
