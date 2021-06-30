import { Component, OnInit } from '@angular/core';
import { verticalSlideAnimation } from '../../../assets/animations/slide';
import { EventEmitterConstants } from '../../constants/event-emitter';
import { EventEmitterService } from '../../services/event-emitter.service';


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
    this.eventEmitter.sendValue(EventEmitterConstants.OPEN_SIDE_MENU, true);
  }
}
