import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiImagenesPageRoutingModule } from './api-imagenes-routing.module';

import { ApiImagenesPage } from './api-imagenes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiImagenesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ApiImagenesPage]
})
export class ApiImagenesPageModule {}
