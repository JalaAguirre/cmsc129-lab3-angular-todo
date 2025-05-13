import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task'; 
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;

  constructor() {}

  ngOnInit(): void {}


}
