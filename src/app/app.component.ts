import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from 'src/assets/animations/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
