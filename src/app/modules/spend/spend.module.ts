import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendComponent } from '../../pages/spend/spend.component';
import { SpendRoutingModule } from './spend-routing.module';
import { GoogleMaterialModule } from '../google-material/google-material.module';
import { SharedModule } from '../shared/shared.module';
import { AddSpentComponent } from '../../component/modal/add-spent/add-spent.component';
import { LongPressDirective } from '../../directive/long-press';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from '../../component/carousel/carousel.component';



@NgModule({
  declarations: [
    SpendComponent,
    AddSpentComponent,
    LongPressDirective,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    GoogleMaterialModule,
    SpendRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class SpendModule { }
