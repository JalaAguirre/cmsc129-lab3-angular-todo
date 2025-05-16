import { Component } from '@angular/core';
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
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-delete-task-modal',
  imports: [MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
            FormsModule,
            MatFormFieldModule,
            MatInputModule
          ],
  templateUrl: './delete-task-modal.component.html',
  styleUrl: './delete-task-modal.component.css'
})
export class DeleteTaskModalComponent {

}
