import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, first, map, Observable, tap, throwError } from 'rxjs';
import { QueryService } from '../../core/services/query.service';

@Injectable({
  providedIn: 'root'
})
export class GlieseService {

  private glieseDbIinitalized$$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private queryService: QueryService) { }

  get glieseDbInitialized$() : Observable<boolean> {
    return this.glieseDbIinitalized$$.asObservable();
  }

  set glieseDbInitialized(initialized: boolean) {
    this.glieseDbIinitalized$$.next(initialized);
  }

  init() : Observable<null> {

    const chain: Observable<any>[] = [
      this.queryService.loadScript("/assets/gliese-schema.sql"),
      this.queryService.loadScript("/assets/gliese.sql")
    ];

    return combineLatest(chain)
      .pipe(
        first(),
        map(() => null),
        catchError((error) => {
          console.log("Error loading init scripts");
          return throwError(() => error)
        })
      );

  }
}
