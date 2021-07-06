import { Component, OnInit } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { AddSpentComponent } from '../../component/modal/add-spent/add-spent.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';
import { EventEmitterConstants } from '../../constants/event-emitter';
import { Observable } from 'rxjs';
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
  contentList: Spent[];
  selectedMonth: string;

  constructor(
    private dialog: MatDialog,
    private eventEmitter: EventEmitterService,
    private _firebaseService: FirebaseService,
    private dateFormatter: DateFormatService
  ) {
    this.currentDate = dayjs();
    this.spentInformation = [];
  }

  ngOnInit(): void {
    this.dateObject = this.dateFormatter.convertDayjsToObject(this.currentDate.format('DD/MM/YYYY'));
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
    this.selectedMonth = month;
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

              const spentMonth = this.dateFormatter.convertDayjsToObject(spent.spentDate);
              if (this.selectedMonth !== spentMonth.month) {
                this.addItem(spent, spentMonth);
                return;
              }

              const existingDate = this.spentInformation?.find(existingSpent => existingSpent.spentDate === spent.spentDate);

              if (existingDate)
                existingDate.spentList.push(...spent.spentList);
              else
                this.spentInformation.push(spent);

              this.addItem(spent);
            });
            this.eventEmitter.sendValue(EventEmitterConstants.HEADER_SPENT_TOTAL, this.spentInformation);
          }
        });
  }

  addItem(spent: Spent, otherMonth?: FirebaseDate) {
    delete spent.spentForm;
    this._firebaseService.insertItem(otherMonth ?? this.dateObject, spent.spentDate, spent);
  }
}
