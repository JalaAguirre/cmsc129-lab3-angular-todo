import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
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
import { FormsModule } from '@angular/forms';

import { Task } from '../Task';
import { TaskService } from '../services/task.service';

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
    AddButtonComponent,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task-modal.component.html',
  styles: [`
    .mat-mdc-form-field {
      width: 100%;
    }
  `]
})
export class AddTaskModalComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  name: string = '';
  date: string = '';
  time: string = '';
  priority: 'high' | 'medium' | 'low' = 'medium';
  done: boolean = false;
  private nextId: number = 1;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      if (tasks && tasks.length > 0) {
        const numericIds = tasks
          .map(t => t.id)
          .filter(id => id !== undefined && id !== null)
          .map(id => parseInt(id as string, 10))
          .filter(id => !isNaN(id));
        
        this.nextId = numericIds.length > 0 ? Math.max(...numericIds) + 1 : 1;
      }
    });
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      id: this.nextId.toString(),
      name: this.name,
      date: this.date,
      time: this.time,
      priority: this.priority,
      done: false
    };

    this.taskService.addTask(newTask).subscribe({
      next: (task: Task) => {
        this.onAddTask.emit(task);
        this.nextId++;
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Error adding task:', error);
      }
    });
  }

  private resetForm() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.priority = 'medium';
  }
}