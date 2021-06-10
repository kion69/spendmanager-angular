import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendComponent } from '../app/pages/spend/spend.component';

const routes: Routes = [
  { path: '', component: SpendComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpendRoutingModule { }
