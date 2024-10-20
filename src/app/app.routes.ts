import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        title: "Home",
        path: "home"
    },
    // {
    //     title: "Gliese Catalog",
    //     path: "gliese",
    //     component: QueryComponent,
    //     canActivate: [glieseLandingGuard]
    // }
];
