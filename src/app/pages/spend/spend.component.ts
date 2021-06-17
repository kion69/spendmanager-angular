import { Component, Input, OnInit } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { default as spentDataJSON } from '../../mock/spent.mock.json';
import { AddSpentComponent } from '../../component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';
import { Constants } from '../../constants/event-emitter';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../../services/firebase.service';
import { DataSnapshot } from '@angular/fire/database/interfaces';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SpendComponent implements OnInit {

  currentDate: Dayjs;
  spentInformation: any[];
  firebaseList: {};
  spentData: any; //Needs to create an Interface  
  contentList: any;
  item: Observable<any[]>;

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService,
    private _firebaseService: FirebaseService
  ) {
    this.currentDate = dayjs();
    this.spentInformation = [];
    this.firebaseList = {};
  }

  ngOnInit(): void {

    this._firebaseService
      .checkConnection()
      .on('value', snapshot => {
        if (snapshot.val() === true) {
          console.log("connected");

        }
      });

    this._firebaseService
      .getItemsFromYear(String(this.currentDate.year()))
      .once('value', snapshot => {
        const month = this.currentDate.format('MMMM');
        this.loadContent(snapshot.val(), month)
      });
  }

  loadContent(snapshot: DataSnapshot, month: string) {
    if (snapshot[month]) {
      this.firebaseList = snapshot;
      this.spentInformation = this.firebaseList[month];
      this.eventEmitter.sendValue(Constants.HEADER_SPENT_TOTAL, this.spentInformation);
    }
  }

  getSpents(month?: string) {
    if (this.firebaseList[month]) {
      this.spentInformation = this.firebaseList[month];
      this.eventEmitter.sendValue(Constants.HEADER_SPENT_TOTAL, this.spentInformation);
    }
    else {
      this.spentInformation = [];
    }

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
            this.eventEmitter.sendValue(Constants.HEADER_SPENT_TOTAL, this.spentInformation);
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
            this.eventEmitter.sendValue(Constants.HEADER_SPENT_TOTAL, this.contentList);
          }
        });
  }
}
