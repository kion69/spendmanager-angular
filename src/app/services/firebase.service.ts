import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';
import { FirebaseDate } from '../interface/firebase-date';
import { DateFormatService } from './date-parse.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private databaseRef: firebase.database.Database

  constructor(private database: AngularFireDatabase,
    private dateFormatService: DateFormatService) {
    this.databaseRef = this.database.database;
  }

  getItemsFromYear(year: string, month?: string) {
    return this.databaseRef.ref().child(year).child(month);
  }

  checkConnection() {
    return this.databaseRef.ref('.info/connected');
  }

  insertItem(dateObject: FirebaseDate, dateNode: string, data) {
    this.databaseRef.ref(`${dateObject.year}/${dateObject.month}`)
      .child('spentList')
      .child(this.dateFormatService.replaceSlash(dateNode)).set(data);
  }

}