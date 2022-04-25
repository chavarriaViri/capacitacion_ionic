import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiJuegosPage } from './api-juegos.page';

const routes: Routes = [
  {
    path: '',
    component: ApiJuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiJuegosPageRoutingModule {}
