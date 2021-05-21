import { AfterViewInit, Component, ComponentRef, OnInit, ViewEncapsulation } from '@angular/core';
import { verticalSlideAnimation } from 'src/assets/animations/slide';

@Component({
  selector: 'app-add-spent',
  templateUrl: './add-spent.component.html',
  styleUrls: ['./add-spent.component.scss'],
  animations: [verticalSlideAnimation],
  host: {
    '(@verticalSlideAnimation.done)': 'animationDone($event)'
  }
})
export class AddSpentComponent implements OnInit, AfterViewInit {

  reference: ComponentRef<AddSpentComponent>;
  showModal = false;
  disableAnimation = true;

  constructor() { }

  ngOnInit(): void { }

  fechar() {
    this.showModal = false;
  }

  ngAfterViewInit(): void {
    this.disableAnimation = false;
  }

  animationDone(event: any) {
    if (event.phaseName === 'done' && event.toState === 'void') {
      this.reference.destroy();
    }
  }

}
