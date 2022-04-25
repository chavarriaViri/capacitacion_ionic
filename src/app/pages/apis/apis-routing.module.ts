import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisPage } from './apis.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/apis/games',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ApisPage,
    children: [
      {
        path: 'games',
        loadChildren: () => import('../api-juegos/api-juegos.module').then( m => m.ApiJuegosPageModule )
      },
      {
        path: 'covid',
        loadChildren: () => import('../api-covid/api-covid.module').then( m => m.ApiCovidPageModule )
      },
      {
        path: 'imagenes',
        loadChildren: () => import('../api-imagenes/api-imagenes.module').then( m => m.ApiImagenesPageModule )
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApisPageRoutingModule {}
