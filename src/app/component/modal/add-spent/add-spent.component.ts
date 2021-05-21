import { AfterViewInit, Component, ComponentRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import dayjs from 'dayjs';
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
  spentForm = [];
  formLegal: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formLegal = new FormGroup({});
  }

  ngOnInit(): void {
    if (this.spentForm.length === 0) {

      this.spentForm.push({
        spentDate: dayjs().format('DD/MM/YYYY'),
        spentTotal: 0,
        spentItems: []
      });
    }
  }

  evento(event) {
    console.log('legal');
    const abc = new FormBuilder().group({
      itemName: ['', Validators.required],
      itemValue: ['', Validators.required],
      itemDescription: [''],
    });

    this.spentForm[0].spentItems.push(abc);

    console.log(this.spentForm);
  }

  addNewSpentForm(item) {
    console.log('legal');
    this.formLegal = new FormBuilder().group({
      itemName: ['', Validators.required],
      itemValue: ['', Validators.required],
      itemDescription: [''],
    });

    item.spentItems.push(this.formLegal);

    console.log(this.spentForm);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.disableAnimation = false;
    });
  }

  animationDone(event: any) {
    if (event.phaseName === 'done' && event.toState === 'void') {
      this.reference.destroy();
    }
  }
}
