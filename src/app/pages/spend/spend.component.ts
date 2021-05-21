import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { default as spentDataJSON } from '../../../app/mock/spent.mock.json';
import { AddSpentComponent } from 'src/app/component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SpendComponent implements OnInit {

  currentMonth: string;
  totalSpent: number;
  spentData: any; //Needs to create an Interface

  constructor(
    // private viewContainerHost: ViewContainerRef,
    // private factoryService: ComponentFactoryService,
    private dialog: MatDialog
  ) {

    this.currentMonth = dayjs().format('MMMM');
    const currentYear = dayjs().year();
    this.spentData = spentDataJSON[currentYear][this.currentMonth];
  }

  ngOnInit(): void {
  }

  addSpent() {
    this.dialog.open(AddSpentComponent, {
      minHeight: '500px',
      width: '500px'
    })
  }
}
