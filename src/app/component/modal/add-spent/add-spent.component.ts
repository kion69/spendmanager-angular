import { Component, ComponentFactoryResolver, ComponentRef, NgZone, OnInit, ViewContainerRef } from '@angular/core';
import { ComponentFactoryService } from 'src/app/services/component-factory.service';
import { horizontalSlideAnimation, verticalSlideAnimation } from 'src/assets/animations/slide';

@Component({
  selector: 'app-add-spent',
  templateUrl: './add-spent.component.html',
  styleUrls: ['./add-spent.component.scss'],
  animations: [verticalSlideAnimation],
  host: {
    '(@verticalSlideAnimation.done)': 'animationDone($event)'
  }
})
export class AddSpentComponent implements OnInit {

  reference: ComponentRef<AddSpentComponent>;
  showModal = false;

  constructor() { }

  ngOnInit(): void { }

  fechar() {
    this.showModal = false;
  }

  animationDone(event: any) {
    if (event.phaseName === 'done' && event.toState === 'void') {
      this.reference.destroy();
    }
  }

}
