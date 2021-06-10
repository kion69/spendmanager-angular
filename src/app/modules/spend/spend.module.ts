import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendComponent } from '../app/pages/spend/spend.component';
import { SpendRoutingModule } from './spend-routing.module';
import { GoogleMaterialModule } from '../google-material/google-material.module';
import { SharedModule } from '../shared/shared.module';
import { AddSpentComponent } from '../app/component/modal/add-spent/add-spent.component';
import { LongPressDirective } from '../app/directive/long-press';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SpendComponent,
    AddSpentComponent,
    LongPressDirective
  ],
  imports: [
    CommonModule,
    GoogleMaterialModule,
    SpendRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
})
export class SpendModule { }
