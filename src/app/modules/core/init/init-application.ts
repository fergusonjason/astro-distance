import { combineLatest, first, map, Observable } from "rxjs";
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
            map(() => undefined)
        );
}