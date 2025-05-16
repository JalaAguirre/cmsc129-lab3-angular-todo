import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCardModule,
            MatCheckboxModule,
            MatIconModule,
            MatButtonModule,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  // @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // onDelete(task: Task) {
  //   this.onDeleteTask.emit(task);
  // }

  openDeleteDialog(): void {
    this.dialog.open(DeleteTaskModalComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: { task: this.task } // Pass the task to the dialog
    });
  }
}

