import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { DateParseService } from 'src/app/services/date-parse.service';
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

  spentForm: FormGroup;
  dateForm: FormGroup;
  spentInformation = Array<any>();
  disableAnimation: boolean;
  addNewDate: boolean;
  newDateInput: string;

  @ViewChild('picker') picker;

  constructor(private dateParser: DateParseService) {
    this.newDateInput = '';
    this.addNewDate = false;
    this.disableAnimation = true;

    this.dateForm = new FormBuilder().group({
      newDateInput: ['']
    });

    this.spentInformation = [
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
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
          },
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
          },
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
          },
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
          },
        ]
      },
    ];

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

  insertNewDate(dateInput) {

    if (dateInput.targetElement.value === undefined || dateInput.targetElement.value === '') {
      // this.addNewDate = !this.addNewDate;
      return;
    }

    const formattedDate = this.dateParser.parse(dateInput.targetElement.value);

    if (!dayjs(formattedDate).isValid()) {
      // this.addNewDate = !this.addNewDate;
      return;
    }

    this.spentInformation.push({
      spentDate: dayjs(formattedDate).format('DD/MM/YYYY'),
      spentTotal: 0,
      spentList: []
    });

    this.picker.close();
    this.dateForm.controls['newDateInput'].setErrors(null);
    this.dateForm.reset();
  }
}
