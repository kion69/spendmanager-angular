import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit {

  months = ['JANEIRO', 'FEVEIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];
  monthSelected;
  constructor() { }

  ngOnInit(): void { 
    this.monthSelected = dayjs().format('MMMM').toUpperCase();
  }

  ngAfterViewInit(): void { }

}
