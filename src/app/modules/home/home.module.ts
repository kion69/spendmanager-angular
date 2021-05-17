import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/component/card/card.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GoogleMaterialModule } from '../google-material/google-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GoogleMaterialModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
