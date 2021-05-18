import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { default as spentDataJSON } from '../../../app/mock/spent.mock.json';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent implements OnInit {

  currentMonth: string;
  totalSpent: number;
  spentData: any; //Needs to create an Interface
  
  constructor() {
    this.spentData = spentDataJSON;
  }

  ngOnInit(): void {
    this.totalSpent = 0;
    this.currentMonth = dayjs().format('MMMM');

    this.spentData.map((item: any) => {
      item.totalSpent = item.spentItems.reduce((counter: number, currentValue: any) =>
        counter + currentValue.value, 0);
      this.totalSpent += item.totalSpent;
    })
  }
}
