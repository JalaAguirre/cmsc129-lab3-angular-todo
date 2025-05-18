import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
  @Output() onDeleteTask = new EventEmitter<Task>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // onDelete(task: Task) {
  //   this.onDeleteTask.emit(task);
  // }

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
}

