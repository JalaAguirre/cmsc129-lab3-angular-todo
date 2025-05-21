import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-task-toast',
  standalone: true,
  imports: [MatIconModule,
            MatButtonModule],
  templateUrl: './delete-task-toast.component.html',
  styleUrl: './delete-task-toast.component.css'
})
export class DeleteTaskToastComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  @Output() undo = new EventEmitter<void>();

  undoDelete() {
    this.data.undo();
  }
}
