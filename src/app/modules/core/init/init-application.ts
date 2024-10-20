import { combineLatest, first, map, Observable, switchMap, tap } from "rxjs";
import { QueryService } from "../services/query.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const initApplication = (): (() => Observable<any>) => {

    const queryService : QueryService = inject(QueryService);
    const router: Router = inject(Router);

    const chain : Observable<any>[] = [
        queryService.initSqlJs()
    ];

    return () => combineLatest(chain)
        .pipe(
            first(),
            switchMap(() => queryService.loadScript("/assets/gliese-schema.sql")),
            switchMap(() => queryService.loadScript("/assets/gliese.data.sql")),
            tap(() => router.navigateByUrl("/home")),
            map(() => undefined)
        );

    //TODO: close the database on shutdown/reload
}