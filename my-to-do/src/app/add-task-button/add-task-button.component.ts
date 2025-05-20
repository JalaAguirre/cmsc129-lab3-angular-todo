import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';

@Component({
  standalone: true,
  selector: 'app-add-task-button',
  imports: [MatButtonModule, 
            MatIconModule, 
            MatDialogModule],
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.css']
})
export class AddTaskButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log('Attempting to open dialog');
    this.dialog.open(AddTaskModalComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
  }
}