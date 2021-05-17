import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationMenuComponent } from './component/navigation-menu/navigation-menu.component';

import { GoogleMaterialModule } from './modules/google-material/google-material.module';
import { HomeModule } from './modules/home/home.module';
import { SpendModule } from './modules/spend/spend.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import * as EventEmitter from 'events';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    GoogleMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HomeModule,
    SpendModule,
    SharedModule
  ],
  providers: [EventEmitter],
  bootstrap: [AppComponent]
})
export class AppModule { }
