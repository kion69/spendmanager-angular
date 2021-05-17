import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendComponent } from 'src/app/pages/spend/spend.component';
import { SpendRoutingModule } from './spend-routing.module';
import { GoogleMaterialModule } from '../google-material/google-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SpendComponent,
  ],
  imports: [
    CommonModule,
    GoogleMaterialModule,
    SpendRoutingModule,
    SharedModule
  ],
})
export class SpendModule { }
