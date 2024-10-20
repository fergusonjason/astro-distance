import { Component, OnInit } from '@angular/core';
import { GlieseService } from '../../services/gliese-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gliese-search',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gliese-search.component.html',
  styleUrl: './gliese-search.component.css'
})
export class GlieseSearchComponent implements OnInit {

  catalogEntryCount$ !: Observable<number>;

  constructor(private glieseService: GlieseService) {}

  ngOnInit(): void {

    this.catalogEntryCount$ = this.glieseService.totalCatalogEntries$;
  }
}
