import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.css'
})
export class EditButtonComponent {
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
