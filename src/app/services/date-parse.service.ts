import { Injectable } from '@angular/core';
import dayjs from 'dayjs';


@Injectable({
  providedIn: 'root'
})
export class DateParseService {

  constructor() { }

  parse(inputDate) {
    const date = inputDate?.replace(/[-|\/]/g, '/').split('/');
    const formattedDate = `${date[1]}/${date[0]}/${date[2]}`;
    return dayjs(formattedDate, 'DD/MM/YYYY', true);
  }
}
