import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TaskService } from '../services/task.service';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';



@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onTaskUpdate = new EventEmitter<Task>();

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onCheckboxChange(event: MatCheckboxChange) {
    const updatedTask = {
      ...this.task,
      done: event.checked
    };
    
    this.taskService.updateTask(updatedTask).subscribe({
      next: (task) => {
        this.task = task;
        this.onTaskUpdate.emit(task);
      },
      error: (err) => {
        console.error('Error updating task:', err);
        // Revert checkbox if update fails
        event.source.checked = !event.checked;
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTaskModalComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: { task: this.task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteTask.emit(this.task);
      }
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditTaskModalComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: { task: this.task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.task = result;
        this.onTaskUpdate.emit(result);
      }
    });
  }

  get formattedDateTime(): string {
    // Combine date and time if both are present
    if (this.task?.date && this.task?.time) {
      const date = new Date(this.task.date);
      const time = new Date(this.task.time);
      // Set the hours/minutes/seconds from time to date
      date.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    }
    return '';
  }
}