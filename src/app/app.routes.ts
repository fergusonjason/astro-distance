import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { GlieseHomeComponent } from './modules/gliese/components/gliese-home/gliese-home.component';
import { GlieseSearchComponent } from './modules/gliese/components/gliese-search/gliese-search.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        title: "Home",
        path: "home",
        component: HomeComponent
    },
    {
        title: "Gliese Catalog",
        path: "gliese",
        component: GlieseHomeComponent,
        canActivate: [],
        children: [
            {
                title: "Search Gliese Catalog",
                path: "search",
                component: GlieseSearchComponent
            }
        ]
    }
];
