import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { selectedPanel } from '../../../assets/animations/select-panel.animation';
import { verticalSlideAnimation } from '../../../assets/animations/slide';
import { EventEmitterConstants } from '../../constants/event-emitter';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-select-spent-panel',
  templateUrl: './select-spent-panel.component.html',
  styleUrls: ['./select-spent-panel.component.scss'],
  animations: [selectedPanel, verticalSlideAnimation],
})
export class SelectSpentPanelComponent implements OnInit {

  @Input('spentInformation') spentInformation: any[];

  openPanel: boolean;

  constructor(
    private eventEmitter: EventEmitterService) {
    this.openPanel = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.openPanel = true;
    });
  }

  onDone(event) {
    if (event.toState === 'void') {
      this.eventEmitter.sendValue(EventEmitterConstants.DISABLE_SELECT_PANEL_MODE, false);
    }
  }

  closePanel() {
    this.openPanel = false;
  }
}
