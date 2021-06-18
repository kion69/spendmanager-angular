import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { FirebaseDate } from '../interface/firebase-date';


@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }

  parse(inputDate) {
    const date = inputDate?.replace(/[-|\/]/g, '/').split('/');
    const formattedDate = `${date[1]}/${date[0]}/${date[2]}`;
    return dayjs(formattedDate, 'DD/MM/YYYY', true);
  }

  transformDate(inputDate) {
    return dayjs(inputDate).format('DD/MM/YYYY');
  }

  convertDayjsToObject(inputDate: Dayjs): FirebaseDate {
    return {
      day: String(dayjs(inputDate).day()),
      month: dayjs(inputDate).format('MMMM'),
      year: String(dayjs(inputDate).year())
    };
  }

  replaceSlash(inputDate: string) {
    return inputDate.replace(/[-|\/]/g, '-');
  }

}
