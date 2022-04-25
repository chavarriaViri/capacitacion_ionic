import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ValueArrayPipe } from 'src/app/objectArray.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [PeliculasPage,ValueArrayPipe]
})
export class PeliculasPageModule {}
