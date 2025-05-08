import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-add-task-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.css'
})
export class AddTaskButtonComponent {

}
