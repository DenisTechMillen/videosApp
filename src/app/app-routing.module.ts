import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gatodebotas',
    loadChildren: () => import('./filmes/gatodebotas/gatodebotas.module').then( m => m.GatodebotasPageModule)
  },
  {
    path: 'sonic',
    loadChildren: () => import('./filmes/sonic/sonic.module').then( m => m.SonicPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./filmes/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
