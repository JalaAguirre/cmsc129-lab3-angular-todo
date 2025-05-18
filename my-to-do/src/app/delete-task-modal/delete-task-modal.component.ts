import { Component, Inject } from '@angular/core';
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
import { Task } from '../Task';
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  standalone: true,
  selector: 'app-delete-task-modal',
  imports: [MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            FormsModule,
            MatFormFieldModule, 
            DeleteButtonComponent
  ],
  templateUrl: './delete-task-modal.component.html',
  styleUrl: './delete-task-modal.component.css'
})
export class DeleteTaskModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}