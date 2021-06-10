import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { default as spentDataJSON } from '../../../app/mock/spent.mock.json';
import { AddSpentComponent } from '../app/component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { EventEmitterService } from '../app/services/event-emitter.service';
import { Constants } from '../app/constants/event-emitter';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SpendComponent implements OnInit {

  currentMonth: string;
  spentInformation: any[];
  spentData: any; //Needs to create an Interface  
  contentList: any;
  item: Observable<any[]>;

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService,
    database: AngularFireDatabase
  ) {
    this.currentMonth = dayjs().format('MMMM');
    database.list(database.database.ref()).valueChanges(['child_added']).subscribe(x => console.log('yyy', x));
  }

  ngOnInit(): void {
    const currentYear = dayjs().year();
    this.spentInformation = spentDataJSON[currentYear][this.currentMonth];
    // Após retornar os dados do banco de dados, realizar a chamada para atualizar o cabeçalho
    this.eventEmitter.setValue(Constants.HEADER_SPENT_TOTAL, this.spentInformation);
  }

  addSpent() {
    this.dialog.open(AddSpentComponent, {
      minHeight: '500px',
      width: '500px',
      maxWidth: '90vw'
    }).afterClosed()
      .subscribe(
        result => {
          if (result) {
            this.spentInformation.push.apply(this.spentInformation, result);
            this.eventEmitter.setValue(Constants.HEADER_SPENT_TOTAL, this.spentInformation);
          }
        });
  }

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
            this.contentList.spentList = result[0].spentList;
            this.eventEmitter.setValue(Constants.HEADER_SPENT_TOTAL, this.contentList);
          }
        });
  }
}
