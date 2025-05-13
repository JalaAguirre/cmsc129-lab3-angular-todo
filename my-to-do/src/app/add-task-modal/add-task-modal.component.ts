import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  standalone: true,
  selector: 'app-add-task-modal',
  providers: [provideNativeDateAdapter()],
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
    AddButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task-modal.component.html',
  styles: [`
    .mat-mdc-form-field {
      width: 100%;
    }
  `]
})
export class AddTaskModalComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Add');
  }
}