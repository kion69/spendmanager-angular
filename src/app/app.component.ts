import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from 'src/assets/animations/route-animation';
import * as dayjs from 'dayjs';
import * as pt from 'dayjs/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    dayjs.locale(pt);
  }

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
