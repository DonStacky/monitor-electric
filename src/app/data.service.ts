import { Injectable } from '@angular/core';
import { Row } from './row';
import { ROWS } from './mock-rows';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getRows(): Row[] {
    return ROWS;
  }
}
