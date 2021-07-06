import { Component, Input, OnInit } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { default as spentDataJSON } from '../../mock/junho.json';
import { AddSpentComponent } from '../../component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';
import { EventEmitterConstants } from '../../constants/event-emitter';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../../services/firebase.service';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { DateFormatService } from '../../services/date-parse.service';
import { FirebaseDate } from '../../interface/firebase-date';
import { selectedPanel } from '../../../assets/animations/select-panel.animation';
import { fadeAnimation } from '../../../assets/animations/slide';
import { Spent } from '../../interface/spent';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [selectedPanel, fadeAnimation]
})
export class SpendComponent implements OnInit {

  currentDate: Dayjs;
  dateObject: FirebaseDate;
  spentInformation: Spent[];
  firebaseList: {};
  spentData: any; //Needs to create an Interface  
  contentList: any;
  item: Observable<any[]>;

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService,
    private _firebaseService: FirebaseService,
    private dateService: DateFormatService
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

    this.dateObject = this.dateService.convertDayjsToObject(this.currentDate.format('DD/MM/YYYY'));

    this.getSpents(this.dateObject.month);

    // this._firebaseService.getItemsFromYear(this.dateObject.year)
    //   .once('child_added', snapshot => {
    //     console.log('novositems>', snapshot.val());
    //     const data = snapshot.val().spentList;
    //     this.firebaseList[this.dateObject.month].spentList.push(...data);
    //   });
  }

  loadContent(snapshot: DataSnapshot, month: string): void
  loadContent(snapshot: DataSnapshot): void {
    if (snapshot) {
      const props = snapshot;
      const monthItems = Object.keys(props).map((key) => props[key]);
      this.spentInformation = monthItems;
      this.eventEmitter.sendValue(EventEmitterConstants.HEADER_SPENT_TOTAL, this.spentInformation);
    }
  }

  getSpents(month?: string) {
    this._firebaseService
      .getItemsFromYear(this.dateObject.year, month)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const month = this.currentDate.format('MMMM');
          this.loadContent(snapshot.val().spentList, month)
        } else {
          this.spentInformation = [];
          this.eventEmitter.sendValue(EventEmitterConstants.HEADER_SPENT_TOTAL, this.spentInformation);
        }
      });
  }

  addSpent() {
    this.dialog.open(AddSpentComponent, {
      width: '500px',
      maxWidth: '90vw'
    }).afterClosed()
      .subscribe(
        (result: any[]) => {
          if (result) {
            result.map((spent: Spent) => {
              const existingDate = this.spentInformation?.find(existingSpent => existingSpent.spentDate === spent.spentDate);
              if (existingDate) {
                existingDate.spentList.push(...spent.spentList);
              }
              else {
                delete spent.spentForm;
                this.spentInformation.push(spent);
                this._firebaseService.insertItem(this.dateObject, spent.spentDate, spent);
              }
            });
            this.eventEmitter.sendValue(EventEmitterConstants.HEADER_SPENT_TOTAL, this.spentInformation);
          }
        });
  }
}
