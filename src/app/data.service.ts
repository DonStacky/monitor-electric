import { Injectable } from '@angular/core';
import { ROWS } from './mock-rows';
import { Row, CheckedRow } from './row';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rows: Row[] = ROWS;
  checkedRows: CheckedRow = {};
  checkedRowsId: string[] = [];
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
    const filteredRows = this.rows.map((row) => {
      if (this.checkedRowsId.includes(row.id)) {
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
    const filteredRows = this.rows.filter(
      (row) => !this.checkedRowsId.includes(row.id)
    );
    this.rows = filteredRows;

    this.isDeleteModalOpen = false;
  }

  checkRow(id: string) {
    if (this.checkedRows[id]) {
      delete this.checkedRows[id];
      this.checkedRowsId = Object.keys(this.checkedRows);
    } else {
      this.checkedRows[id] = true;
      this.checkedRowsId = Object.keys(this.checkedRows);
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
      source,
      phase: 'a',
      voltage: '1',
      amperage: '0.5',
      power: '3',
      repower: '0.7',
      angle: '0.8',
      id: `c${nanoid()}`
    });

    this.isAddModalOpen = false;
  }
}
