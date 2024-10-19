import { Component } from '@angular/core';
import { QueryInputComponent } from '../query-input/query-input.component';
import { QueryResultsComponent } from '../query-results/query-results.component';

@Component({
  selector: 'astro-query',
  standalone: true,
  imports: [
    QueryInputComponent,
    QueryResultsComponent
  ],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {

  constructor() {}
}
