import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./shared/layout/layout').then(m => m.Layout),
        children: [
            {
                path: 'generadores',
                loadComponent: () => import('./modules/generadores/generadores').then(m => m.Generadores),
                children: [
                    {
                        path: '',
                        redirectTo: 'documentos-alcance',
                        pathMatch: 'full',
                    },
                    {
                        path: 'documentos-alcance',
                        loadComponent: () => import('./modules/generadores/documentos-alcance/documentos-alcance').then(m => m.DocumentosAlcance),
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
    }
];