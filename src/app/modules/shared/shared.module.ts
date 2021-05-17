import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/component/card/card.component';
import { GoogleMaterialModule } from '../google-material/google-material.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    GoogleMaterialModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
