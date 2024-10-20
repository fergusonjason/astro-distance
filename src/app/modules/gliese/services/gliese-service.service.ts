import { DbResultTransformerFn } from './../../core/types/db-result-transformer.type';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QueryService } from '../../core/services/query.service';

@Injectable({
  providedIn: 'root'
})
export class GlieseService {

  private isInitialized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private totalCatalogEntries$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private totalEntries$!: Observable<number>;

  constructor(private queryService : QueryService) { }

  get isInitialized$() {
    return this.isInitialized$$.asObservable();
  }

  get totalCatalogEntries$() {
    return this.totalCatalogEntries$$.asObservable();
  }

  init() : Observable<void> {

    const countTransformer : DbResultTransformerFn<any, number> = (input: any) => {

      if (!input || !input.values) {
        return 0;
      }

      if (!input.length || !input[0].values.length) {
        return 0;
      }

      const value = input[0].values[0];
      return value[0];

    }

    const test: any = this.queryService.query("SELECT COUNT(*) AS COUNT FROM GLIESE");
    const count : number = countTransformer(test);
    this.totalCatalogEntries$$.next(count);

    return of(undefined);
  }
}
