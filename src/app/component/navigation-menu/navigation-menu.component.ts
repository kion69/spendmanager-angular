import { Component, OnInit } from '@angular/core';
import { Constants } from '../app/constants/event-emitter';
import { EventEmitterService } from '../app/services/event-emitter.service';
import { verticalSlideAnimation } from '../assets/animations/slide';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [verticalSlideAnimation]
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
