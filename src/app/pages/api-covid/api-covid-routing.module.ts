import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiCovidPage } from './api-covid.page';

const routes: Routes = [
  {
    path: '',
    component: ApiCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiCovidPageRoutingModule {}
