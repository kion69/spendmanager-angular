import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/event-emitter';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { horizontalSlideAnimation } from 'src/assets/animations/slide';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [horizontalSlideAnimation]
})
export class SideMenuComponent implements OnInit {

  sideMenuOpen: boolean

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private eventEmitter: EventEmitterService) {
    this.sideMenuOpen = false;
  }

  ngOnInit(): void {
    this.eventEmitter.register(Constants.OPEN_SIDE_MENU).subscribe(responseEvent => {
      this.sideMenuOpen = responseEvent;
      this.document.body.style.overflowY = this.sideMenuOpen ? 'hidden' : 'scroll';
    });
  }

}
