import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'astro-query-input',
  standalone: true,
  imports: [
    MatInputModule
  ],
  templateUrl: './query-input.component.html',
  styleUrl: './query-input.component.css'
})
export class QueryInputComponent {

  constructor() {}

}
