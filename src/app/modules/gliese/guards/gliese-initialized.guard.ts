import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { GlieseService } from '../services/gliese-service.service';
import { iif, of, switchMap } from 'rxjs';

export const glieseInitializedGuard: CanActivateChildFn = (route, state) => {

  const glieseService : GlieseService = inject(GlieseService);

  return glieseService.isInitialized$
    .pipe(
      switchMap((isInitialized) =>
        iif(
          () => isInitialized,
          of(true),
          glieseService.init()
            .pipe(
              switchMap(() => of(true))
            )
        )
      )
    );


};
