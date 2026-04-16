import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then((module) => module.HomeComponent),
    },
    {
        path: 'segments',
        loadComponent: () =>
            import('./pages/segments/segments').then(
                (module) => module.Segments
            ),
    }
];
