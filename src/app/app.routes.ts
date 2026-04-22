import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then((module) => module.HomeComponent),
    },
    {
        path: 'segmentos',
        loadComponent: () =>
            import('./pages/segments/segments').then(
                (module) => module.Segments
            ),
    },
    {
        path: 'segments',
        redirectTo: 'segmentos',
        pathMatch: 'full',
    },
    {
        path: 'segmentos/:segmentoSlug/:subsegmentoSlug',
        loadComponent: () =>
            import('./pages/segments/subsegments/subsegments').then(
                (module) => module.Subsegments
            ),
    },
    {
        path: 'subsegments',
        redirectTo: 'segmentos',
        pathMatch: 'full',
    },
    {
        path: 'subsegments/:segmentoSlug/:subsegmentoSlug',
        redirectTo: 'segmentos/:segmentoSlug/:subsegmentoSlug',
        pathMatch: 'full',
    },
];
