import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitterConstants } from '../../constants/event-emitter';
import { Spent } from '../../interface/spent';
import { DateFormatService } from '../../services/date-parse.service';
import { EventEmitterService } from '../../services/event-emitter.service';
import { FirebaseService } from '../../services/firebase.service';
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
  @Input() contentList: Spent[];

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService,
    private dateFormatter: DateFormatService,
    private _firebaseService: FirebaseService
  ) { }

  ngOnInit(): void { }

  inspectCurrentSpent(spent) {
    this.dialog.open(AddSpentComponent, {
      data: {
        ...spent,
        spentList: spent.spentList ? Array.from(spent.spentList) : []
      },
      minHeight: '500px',
      width: '500px',
      maxWidth: '90vw'
    }).afterClosed()
      .subscribe(
        (result) => {
          if (result) {
            const itemEdited: Spent = result[0];
            const indexOfItemToUpdated = this.contentList.findIndex(spent => spent.spentDate === itemEdited.spentDate);
            this.contentList[indexOfItemToUpdated] = itemEdited;
            this.eventEmitter.sendValue(EventEmitterConstants.HEADER_SPENT_TOTAL, this.contentList);

            delete itemEdited.spentForm;
            const dateObject = this.dateFormatter.convertDayjsToObject(itemEdited.spentDate);
            this._firebaseService.insertItem(dateObject, spent.spentDate, itemEdited);
          }
        });
  }
}
