import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiImagenesPage } from './api-imagenes.page';

const routes: Routes = [
  {
    path: '',
    component: ApiImagenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiImagenesPageRoutingModule {}
