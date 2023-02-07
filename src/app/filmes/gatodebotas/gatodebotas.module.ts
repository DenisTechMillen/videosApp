import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatodebotasPageRoutingModule } from './gatodebotas-routing.module';

import { GatodebotasPage } from './gatodebotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatodebotasPageRoutingModule
  ],
  declarations: [GatodebotasPage]
})
export class GatodebotasPageModule {}
