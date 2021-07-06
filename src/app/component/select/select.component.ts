import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {

  months = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Novembro', 'Dezembro'];
  selectedMonth: string;

  @Output() emitChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.selectedMonth = dayjs().format('MMMM');
    setTimeout(() => {
      this.monthChanged({ value: this.selectedMonth });
    });
  }

  monthChanged({ value }) {
    this.emitChange.emit(value);
  }
}
