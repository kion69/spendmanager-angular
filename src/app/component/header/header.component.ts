import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { default as spentDataJSON } from '../../../app/mock/spent.mock.json';

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

  constructor() {
    this.spentData = spentDataJSON;
  }

  ngOnInit(): void {
    this.currentMonth = dayjs().format('MMMM');
    this.currentYear = dayjs().year();
    this.totalSpent = 0;

    const spentOfMonth: [] = this.spentData[this.currentYear][this.currentMonth];

    spentOfMonth.map((item: any) => {
      item.totalSpent = item.spentItems.reduce((counter: number, currentValue: any) => counter + currentValue.value, 0);
      this.totalSpent += item.totalSpent;
    });
  }

}
