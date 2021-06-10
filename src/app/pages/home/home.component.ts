import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { ComponentFactoryService } from '../app/services/component-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
