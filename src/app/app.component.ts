import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public dataService: DataService) {}
}
