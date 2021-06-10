import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { horizontalSlideAnimation } from '../../../assets/animations/slide';
import { Constants } from '../../constants/event-emitter';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [horizontalSlideAnimation]
})
export class SideMenuComponent implements OnInit {

  sideMenuOpen: boolean

  constructor(
    private eventEmitter: EventEmitterService) {
    this.sideMenuOpen = false;
  }

  ngOnInit(): void {
    this.eventEmitter.register(Constants.OPEN_SIDE_MENU).subscribe(responseEvent => {
      this.sideMenuOpen = responseEvent;
    });
  }

}
