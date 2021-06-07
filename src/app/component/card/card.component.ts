import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/constants/event-emitter';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { AddSpentComponent } from '../modal/add-spent/add-spent.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() amount: string;
  @Input() contentList: any;

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService
  ) { }

  ngOnInit(): void { }

  inspectCurrentSpent(spent) {
    this.dialog.open(AddSpentComponent, {
      data: {
        ...spent,
        spentList: Array.from(spent.spentList)
      },
      minHeight: '500px',
      width: '500px',
      maxWidth: '90vw'
    }).afterClosed()
      .subscribe(
        result => {
          if (result) {
            const abc = this.contentList.find(x => x.id === result[0].id);
            abc.spentList = result[0].spentList;
            this.eventEmitter.setValue(Constants.HEADER_SPENT_TOTAL, this.contentList);
          }
        });
  }

}
