import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-cadas',
    loadChildren: () => import('./cadastro/tela-cadas/tela-cadas.module').then( m => m.TelaCadasPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },  {
    path: 'tela-principal',
    loadChildren: () => import('./principal/tela-principal/tela-principal.module').then( m => m.TelaPrincipalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
