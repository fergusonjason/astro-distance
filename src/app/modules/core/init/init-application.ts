import { combineLatest, first, map, Observable, switchMap } from "rxjs";
import { QueryService } from "../services/query.service";
import { inject } from "@angular/core";

export const initApplication = (): (() => Observable<any>) => {

    const queryService : QueryService = inject(QueryService);

    const chain : Observable<any>[] = [
        queryService.initSqlJs()
    ];

    return () => combineLatest(chain)
        .pipe(
            first(),
            switchMap(() => queryService.loadScript("/assets/gliese-schema.sql")),
            switchMap(() => queryService.loadScript("/assets/gliese.data.sql")),
            map(() => undefined)
        );
}