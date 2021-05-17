import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  evento = {};

  constructor() { }

  register(arg: string): Observable<any> {
    const eventName = arg;
    this.evento[eventName] = new Subject();
    return this.evento[eventName].asObservable();
  }

  setValue(arg: string, value: any) {
    const className = arg;
    this.evento[className].next(value);
  }
}
