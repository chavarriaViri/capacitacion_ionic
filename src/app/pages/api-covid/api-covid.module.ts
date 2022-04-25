import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiCovidPageRoutingModule } from './api-covid-routing.module';

import { ApiCovidPage } from './api-covid.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiCovidPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ApiCovidPage]
})
export class ApiCovidPageModule {}
