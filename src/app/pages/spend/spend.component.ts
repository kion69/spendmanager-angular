import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { default as spentDataJSON } from '../../../app/mock/spent.mock.json';
import { AddSpentComponent } from 'src/app/component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
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
    this.spentData = spentDataJSON;
  }

  ngOnInit(): void {
    this.totalSpent = 0;
    this.currentMonth = dayjs().format('MMMM');
  }

  addSpent() {
    this.dialog.open(AddSpentComponent, {
      minHeight: '500px',
      width: '500px'
    })
  }
}
