import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})

export class GoogleMaterialModule { }
