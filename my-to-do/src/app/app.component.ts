import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import { MatSelectModule } from '@angular/material/select';
import { SortTaskButtonComponent } from "./sort-task-button/sort-task-button.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SubheaderContainerComponent } from './subheader-container/subheader-container.component';
import { MatButtonToggleChange } from '@angular/material/button-toggle';  


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AddTaskButtonComponent,
    MatSelectModule, SortTaskButtonComponent, TasksComponent, SubheaderContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-to-do';
  
  @ViewChild(TasksComponent) tasksComponent!: TasksComponent;

  onSortChange(event: MatButtonToggleChange) {
    if (event.value && this.tasksComponent) {
      this.tasksComponent.onSortChange(event.value);
    }
  }
}
