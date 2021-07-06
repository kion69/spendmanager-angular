import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { verticalSlideAnimation } from '../../../../assets/animations/slide';
import { EventEmitterConstants } from '../../../constants/event-emitter';
import { Spent } from '../../../interface/spent';
import { EventEmitterService } from '../../../services/event-emitter.service';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
  animations: [verticalSlideAnimation],
  encapsulation: ViewEncapsulation.None
})
export class SelectOptionsComponent implements OnInit {

  @Input() openPanel: boolean;
  @Input() itemCount: number;
  @Input() selectedItems: Spent[];

  constructor(
    private eventEmitter: EventEmitterService) {
    this.openPanel = false;
  }

  ngOnInit(): void { }

  onDone(event) {
    if (event.toState === 'void') {
      this.eventEmitter.sendValue(EventEmitterConstants.DISABLE_SELECT_PANEL_MODE, false);
    }
  }

  closePanel() {
    this.openPanel = false;
  }

  deleteSelectedItems() {
    const deleteQueu = [];
    this.selectedItems.map((spent: Spent, index: number) => {
      if (spent.selected)
        deleteQueu.push(index);
    });

    deleteQueu.reverse().forEach(index => this.selectedItems.splice(index, 1));
    this.closePanel();
  }
}
