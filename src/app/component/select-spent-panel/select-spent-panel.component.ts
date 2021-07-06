import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { selectedPanel } from '../../../assets/animations/select-panel.animation';
import { verticalSlideAnimation } from '../../../assets/animations/slide';
import { Spent } from '../../interface/spent';

@Component({
  selector: 'app-select-spent-panel',
  templateUrl: './select-spent-panel.component.html',
  styleUrls: ['./select-spent-panel.component.scss'],
  animations: [selectedPanel, verticalSlideAnimation],
  encapsulation: ViewEncapsulation.None
})
export class SelectSpentPanelComponent implements OnInit, OnDestroy {

  @Input('spentInformation') spentInformation: any[];
  selectedItems: Spent[];

  openPanel: boolean;
  itemCount: number

  constructor() {
    this.openPanel = false;
    this.itemCount = 0;
    this.selectedItems = [];
  }

  ngOnInit(): void {
    const itemSelected: Spent = this.spentInformation.find((spent: Spent) => spent.selected);
    this.selectedItems.push(itemSelected);

    setTimeout(() => {
      this.openPanel = true;
      this.checkcount();
    });
  }

  ngOnDestroy(): void {
    this.spentInformation.map(item => item.selected = false);
  }

  selectItem(spent: Spent, index: number) {
    spent.selected = !spent.selected;

    if (spent.selected) {
      this.selectedItems.push(spent);
    }
    else {
      this.selectedItems.splice(index, 1);
    }

    this.checkcount();
  }

  checkcount() {
    this.itemCount = this.spentInformation.filter(item => item.selected).length;
  }
}
