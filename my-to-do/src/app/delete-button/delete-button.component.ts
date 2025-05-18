import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})

export class DeleteButtonComponent {
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
