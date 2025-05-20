import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { AddTaskButtonComponent } from '../add-task-button/add-task-button.component';
import { SortTaskButtonComponent } from '../sort-task-button/sort-task-button.component';

@Component({
  selector: 'app-subheader-container',
  imports: [CommonModule,
            AddTaskButtonComponent,
            SortTaskButtonComponent],
  templateUrl: './subheader-container.component.html',
  styleUrl: './subheader-container.component.css'
})
export class SubheaderContainerComponent {
  @Output() sortChange = new EventEmitter<MatButtonToggleChange>();

  onSortChange(event: MatButtonToggleChange) {
    this.sortChange.emit(event);
  }
}
