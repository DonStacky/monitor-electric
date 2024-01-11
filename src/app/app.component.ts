import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableRowComponent } from './table-row/table-row.component';
import { ROWS } from './mock-rows';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableRowComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  rows = ROWS;

  addRow() {
    console.log("add row");
  }

  editRow() {
    console.log("edit row");
  }

  deleteRow() {
    console.log("delete row");
  }
}
