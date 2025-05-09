import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import {MatSelectModule} from '@angular/material/select';
import { SortTaskButtonComponent } from "./sort-task-button/sort-task-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AddTaskButtonComponent,
    MatSelectModule, SortTaskButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-to-do';
}
