import { AfterViewInit, Component, ComponentRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
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
  showModal: boolean;
  disableAnimation: boolean;
  spentInformation = Array<any>();
  spentForm: FormGroup;
  addNewDate: boolean;
  newDateInput: string;

  constructor() {
    this.newDateInput = '';
    this.addNewDate = false;
    this.showModal = false;
    this.disableAnimation = true;

    this.spentInformation = [{
      spentDate: dayjs().format('DD/MM/YYYY'),
      spentTotal: 0,
      spentList: [
        {
          itemName: 'Cadeira',
          itemValue: 123,
          itemDescription: ''
        },
        {
          itemName: 'Cafeteira',
          itemValue: 12,
          itemDescription: 'Magica'
        },
        {
          itemName: 'Frigideira',
          itemValue: 123,
          itemDescription: 'Isso ae'
        }
      ]
    }];

    this.spentForm = new FormBuilder().group({
      itemName: ['', Validators.required],
      itemValue: ['', Validators.required],
      itemDescription: ['']
    });
  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.disableAnimation = false;
    });
  }

  calculateTotal() {
    this.spentInformation
      .forEach(spent => {
        spent.spentTotal = spent.spentList.reduce((counter: any, currentValue: any) => counter + currentValue.itemValue, 0);
      });
  }

  validateInput(currentList) {
    const itemName = this.spentForm.controls['itemName'];
    const itemValue = this.spentForm.controls['itemValue'];
    const itemDescription = this.spentForm.controls['itemDescription'];

    if (itemName.valid && itemValue.valid) {
      currentList.spentList.push({
        itemName: itemName.value,
        itemValue: Number(itemValue.value),
        itemDescription: itemDescription.value
      });
    }
    this.spentForm.reset();
    this.calculateTotal();
  }

  insertNewDate(input) {

    if (input === undefined || input === '') {
      this.addNewDate = !this.addNewDate;
      return;
    }

    const date = input?.replace(/[-|\/]/g, '/').split('/');
    const formattedDate = `${date[1]}/${date[0]}/${date[2]}`;

    if (!dayjs(formattedDate, 'DD/MM/YYYY', true).isValid()) {
      this.addNewDate = !this.addNewDate;
      return;
    }

    this.spentInformation.push({
      spentDate: dayjs(formattedDate).format('DD/MM/YYYY'),
      spentTotal: 0,
      spentList: []
    });

    this.newDateInput = undefined;
    this.addNewDate = !this.addNewDate
  }

  animationDone(event: any) {
    if (event.phaseName === 'done' && event.toState === 'void') {
      this.reference.destroy();
    }
  }
}
