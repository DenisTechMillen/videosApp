import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatodebotasPage } from './gatodebotas.page';

const routes: Routes = [
  {
    path: '',
    component: GatodebotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatodebotasPageRoutingModule {}
