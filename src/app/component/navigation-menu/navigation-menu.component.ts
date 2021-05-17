import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/event-emitter';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { slideAnimation } from 'src/assets/animations/slide';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [slideAnimation]
})
export class NavigationMenuComponent implements OnInit {

  constructor(
    private eventEmitter: EventEmitterService) {
  }

  ngOnInit(): void { }

  openSideMenu(): void {
    this.eventEmitter.setValue(Constants.OPEN_SIDE_MENU, true);
  }
}
