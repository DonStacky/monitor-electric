import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ROWS } from './mock-rows';
import { CheckedRow } from './row';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  rows = ROWS;
  checkedRows: CheckedRow = {};
  isAddModalOpen = false;
  isEditModalOpen = false;
  isDeleteModalOpen = false;

  openAddModal() {
    this.isAddModalOpen = true;
  }

  openEditModal() {
    this.isEditModalOpen = true;
  }

  openDeleteModal() {
    this.isDeleteModalOpen = true;
  }

  closeModal() {
    this.isAddModalOpen = false;
    this.isEditModalOpen = false;
    this.isDeleteModalOpen = false;
  }

  editRow(date: string, time: string, source: string) {
    const checkedRowsId = Object.keys(this.checkedRows);
    const filteredRows = this.rows.map((row) => {
      if (checkedRowsId.includes(row.id)) {
        row.date = date;
        row.time = time;
        row.source = source;
      }

      return row;
    });
    this.rows = filteredRows;

    this.isEditModalOpen = false;
  }

  deleteRow() {
    const checkedRowsId = Object.keys(this.checkedRows);
    const filteredRows = this.rows.filter(
      (row) => !checkedRowsId.includes(row.id)
    );
    this.rows = filteredRows;

    this.isDeleteModalOpen = false;
  }

  checkRow(id: string) {
    if (this.checkedRows[id]) {
      delete this.checkedRows[id];
    } else {
      this.checkedRows[id] = true;
    }
  }

  addRow(source: string) {
    const dateNow = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    const date = dateNow.toLocaleDateString('fr-CH', options);
    const time = dateNow.toLocaleTimeString('en-GB');

    this.rows.unshift({
      date,
      time,
      source: source,
      phase: 'a',
      voltage: '1',
      amperage: '0.5',
      power: '3',
      repower: '0.7',
      angle: '0.8',
      id: `c${this.rows.length}`
    });

    this.isAddModalOpen = false;
  }
}
