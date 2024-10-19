import { Routes } from '@angular/router';
import { QueryComponent } from './modules/gliese/components/query/query.component';
import { glieseLandingGuard } from './modules/gliese/guards/gliese-landing.guard';

export const routes: Routes = [
    {
        title: "Gliese Catalog",
        path: "/gliese",
        component: QueryComponent,
        canActivate: [glieseLandingGuard]
    }
];
