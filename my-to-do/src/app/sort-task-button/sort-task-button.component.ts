import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleModule, MatButtonToggleChange  } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-task-button',
  standalone: true,
  imports: [MatButtonToggleModule,
    CommonModule],
  templateUrl: './sort-task-button.component.html',
  styleUrl: './sort-task-button.component.css'
})
export class SortTaskButtonComponent {
  @Output() sortChange = new EventEmitter<MatButtonToggleChange>();

  onSortChange(event: MatButtonToggleChange) {
    this.sortChange.emit(event);
  }
}