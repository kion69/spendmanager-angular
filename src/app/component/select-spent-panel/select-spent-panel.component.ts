import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { selectedPanel } from '../../../assets/animations/select-panel.animation';
import { verticalSlideAnimation } from '../../../assets/animations/slide';

@Component({
  selector: 'app-select-spent-panel',
  templateUrl: './select-spent-panel.component.html',
  styleUrls: ['./select-spent-panel.component.scss'],
  animations: [selectedPanel, verticalSlideAnimation],
  encapsulation: ViewEncapsulation.None
})
export class SelectSpentPanelComponent implements OnInit, OnDestroy {

  @Input('spentInformation') spentInformation: any[];

  openPanel: boolean;
  itemCount: number

  constructor() {
    this.openPanel = false;
    this.itemCount = 0;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.openPanel = true;
      this.checkcount();
    });
  }

  ngOnDestroy(): void {
    this.spentInformation.map(item => item.selected = false);
  }

  selectItem(spent) {
    spent.selected = !spent.selected;
    this.checkcount();
  }

  checkcount() {
    this.itemCount = this.spentInformation.filter(item => item.selected).length;
  }
}
