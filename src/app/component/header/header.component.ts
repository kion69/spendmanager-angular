import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { Constants } from '../../constants/event-emitter';
import { EventEmitterService } from '../../services/event-emitter.service';
import { default as spentDataJSON } from '../../mock/spent.mock.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentMonth: string;
  currentYear: number;
  totalSpent: number;
  spentData: any;
  showLoader: boolean;

  constructor(private eventEmitter: EventEmitterService) {
    this.spentData = spentDataJSON;
    this.showLoader = true;
  }

  ngOnInit(): void {

    this.currentMonth = dayjs().format('MMMM');
    this.currentYear = dayjs().year();
    this.totalSpent = 0;

    // this.calculateTotal(this.spentData[this.currentYear][this.currentMonth]);

    this.eventEmitter.register(Constants.HEADER_SPENT_TOTAL).subscribe(result => {
      this.calculateTotal(result);
      this.showLoader = false;
    });
  }

  calculateTotal(list) {
    this.totalSpent = 0;

    list?.map(item => {
      if (!item.spentList) return;
      item.totalSpent = item.spentList?.reduce((counter: number, currentValue: any) => counter + currentValue.itemValue, 0);

      this.totalSpent += item.totalSpent;
    });
  }

}
