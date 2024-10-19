import { CanActivateFn } from '@angular/router';
import { GlieseService } from '../services/gliese.service';
import { inject } from '@angular/core';
import { iif, map, Observable, of, switchMap } from 'rxjs';

export const glieseLandingGuard: CanActivateFn = (route, state) => {

  const glieseService : GlieseService = inject(GlieseService);
  const isInitialized$ : Observable<boolean> = glieseService.glieseDbInitialized$

  return isInitialized$
    .pipe(
      switchMap((isInitialized) =>
        iif(
          () => isInitialized,
          of(true),
          glieseService.init()
            .pipe(
              map(() => true)
            )
        )
      )
    )
};
