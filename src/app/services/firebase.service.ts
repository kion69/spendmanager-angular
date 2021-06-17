import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private databaseRef: firebase.database.Database

  constructor(private database: AngularFireDatabase) {
    this.databaseRef = this.database.database;
  }

  getItemsFromYear(year: string) {
    return this.databaseRef.ref(year);
  }

  checkConnection(){
    return this.databaseRef.ref('.info/connected');
  }
}
