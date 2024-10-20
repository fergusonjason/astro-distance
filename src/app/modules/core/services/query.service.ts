import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import initSqlJs, { Database } from 'sql.js';
//import * as SQL from 'sql.js';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  wasmInstance: any;
  db!: Database;

  constructor() { }

  initSqlJs() {

    const wasmFile = '/assets/sql-wasm.wasm';

    const init$ : Observable<any> = from(initSqlJs({
      locateFile: file => wasmFile
    }));

    return init$
      .pipe(
        map((SQL) => new SQL.Database()),
        tap((db) => {
          this.db = db;
          console.log("Initialized db");
        }),
        catchError((error) => {
          console.error('Error loading sql.js WASM module:', error);
          return throwError(() => new Error('Failed to load sql.js WASM module'));
        })
      );

  }

  loadScript(scriptLocation : string) : Observable<any> {

    return from(fetch(scriptLocation))
      .pipe(
        switchMap((response) => from(response.text())),
        tap((text) => this.db.exec(text))
      );
  }

  query(sql: string) : any {

    return this.db.exec(sql);

  }

  // same as query, but wrapped in an Observable
  query$(sql: string) : Observable<any> {

    return of(null)
      .pipe(
        map(() => this.db.exec(sql))
      );
  }

  // queryAsObject(sql: string) : any {

  //   const stmt = this.db.prepare(sql);
  //   const result : any = stmt.getAsObject();

  //   return result;
  // }

  private callWasmFunction(funcName: string, ...args: any[]): any {
    if (this.wasmInstance && this.wasmInstance.exports[funcName]) {
      return this.wasmInstance.exports[funcName](...args);
    }
    throw new Error(`Function ${funcName} not found in WASM module`);
  }
}
