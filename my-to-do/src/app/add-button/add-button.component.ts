import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent implements OnInit{

  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }
}
