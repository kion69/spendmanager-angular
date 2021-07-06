import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { FirebaseDate } from '../interface/firebase-date';


@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }
  /**
   * Change format date from 'DD/MM/YYYY' to 'MM/DD/YYYY'
  */
  formatDate(inputDate: string) {
    const date = inputDate?.replace(/[-|\/]/g, '/').split('/');
    return `${date[1]}/${date[0]}/${date[2]}`;
  }

  transformDate(inputDate) {
    return dayjs(inputDate).format('DD/MM/YYYY');
  }

  convertDayjsToObject(inputDate: string): FirebaseDate {

    const formatedDate = this.formatDate(inputDate);
    return {
      day: String(dayjs(formatedDate).date()),
      month: dayjs(formatedDate).format('MMMM'),
      year: String(dayjs(formatedDate).year())
    };
  }

  replaceSlash(inputDate: string) {
    return inputDate.replace(/[-|\/]/g, '-');
  }

}
