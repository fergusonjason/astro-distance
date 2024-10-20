import { Routes } from '@angular/router';
import { GlieseSearchComponent } from './modules/gliese/components/gliese-search/gliese-search.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { GlieseDistanceComponent } from './modules/gliese/components/gliese-distance/gliese-distance.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    // { path: '**', redirectTo: '/home' },
    {
        title: "Home",
        path: "home",
        component: HomeComponent
    },
    {
        title: "Gliese Catalog",
        path: "gliese",
        canActivate: [],
        children: [
            {
                title: "Search Gliese Catalog",
                path: "search",
                component: GlieseSearchComponent
            },
            {
                title: "Distance Calculator",
                path: "distanceCalculator",
                component: GlieseDistanceComponent
            }
        ]
    }
];
