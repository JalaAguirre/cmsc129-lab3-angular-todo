import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { DeleteTaskToastComponent } from '../delete-task-toast/delete-task-toast.component';

import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  standalone: true,
  selector: 'app-delete-task-modal',
  imports: [MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            FormsModule,
            MatFormFieldModule, 
            DeleteButtonComponent,
            MatButtonModule,  
            MatInputModule],
  templateUrl: './delete-task-modal.component.html',
  styleUrl: './delete-task-modal.component.css'
})
export class DeleteTaskModalComponent {
  private deletedTask: Task | null = null;

  constructor(
    public dialogRef: MatDialogRef<DeleteTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task },
    private snackBar: MatSnackBar,
    private taskService: TaskService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    // Store the task before deletion
    this.deletedTask = {...this.data.task};
    this.dialogRef.close(true);
    this.showDeleteToast();
  }


  private showDeleteToast(): void {
    const toastRef = this.snackBar.openFromComponent(DeleteTaskToastComponent, {
      duration: 5000,
      panelClass: ['success-toast'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: {
        message: 'Task deleted successfully!',
        undo: () => this.undoDelete()
      }
    });

    toastRef.afterDismissed().subscribe(() => {
      if (this.deletedTask) {
        // Permanently delete the task if toast was dismissed without undo
        this.taskService.deleteTask(this.deletedTask).subscribe();
      }
    });
  }

  private undoDelete(): void {
    if (this.deletedTask) {
      this.taskService.addTask(this.deletedTask).subscribe({
        next: (restoredTask) => {
          console.log('Task restored:', restoredTask);
          this.deletedTask = null;
        },
        error: (err) => {
          console.error('Error restoring task:', err);
        }
      });
    }
  }
}