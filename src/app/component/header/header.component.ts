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
  totalSpent: number;
  spentData: any;

  constructor() {
    this.spentData = spentDataJSON;
  }

  ngOnInit(): void {
    this.currentMonth = dayjs().format('MMMM');
    this.totalSpent = 0;

    this.spentData.map((item: any) => {
      item.totalSpent = item.spentItems.reduce((counter: number, currentValue: any) => counter + currentValue.value, 0);
      this.totalSpent += item.totalSpent;
    });
  }

}
