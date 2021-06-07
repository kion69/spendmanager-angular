import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)     , data : {animation: 0} },
  { path: 'spend', loadChildren: () => import('./modules/spend/spend.module').then(m => m.SpendModule) , data : {animation: 1} },
  { path: '', redirectTo: '/spend', pathMatch: 'full', },
  { path: '**', redirectTo: '/spend', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
