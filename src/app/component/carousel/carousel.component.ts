import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  months = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Novembro', 'Dezembro'];
  monthSelected: string;

  @Output() emitChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.monthSelected = dayjs().format('MMMM');
  }

  monthChanged({ value }) {
    this.emitChange.emit(value);
  }
}
