import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import dayjs from 'dayjs';
import { DateParseService } from 'src/app/services/date-parse.service';
import { verticalSlideAnimation } from 'src/assets/animations/slide';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet.component';


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

  dateForm: FormGroup;
  spentInformation = Array<any>();
  disableAnimation: boolean;
  addNewDate: boolean;
  newDateInput: string;

  teste: any;

  @ViewChild('picker') picker;

  constructor(
    private dateParser: DateParseService,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet) {
    this.newDateInput = '';
    this.addNewDate = false;
    this.disableAnimation = true;

    this.dateForm = new FormBuilder().group({
      newDateInput: ['']
    });

    this.spentInformation = [
      {
        id: '2873YEUB',
        spentDate: dayjs().format('13/05/2021'),
        spentTotal: 0,
        spentForm: new FormBuilder().group({
          itemName: ['', Validators.required],
          itemValue: ['', Validators.required],
          itemDescription: ['']
        }),
        spentList: [
          {
            id: Math.ceil(Math.random() * 100),
            itemName: 'Cadeira',
            itemValue: 123,
            itemDescription: ''
          },
          {
            id: Math.ceil(Math.random() * 100),
            itemName: 'Cafeteira',
            itemValue: 12,
            itemDescription: 'Magica'
          },
          {
            id: Math.ceil(Math.random() * 100),
            itemName: 'Frigideira',
            itemValue: 123,
            itemDescription: 'Isso ae'
          },
          {
            id: Math.ceil(Math.random() * 100),
            itemName: 'Cadeira',
            itemValue: 123,
            itemDescription: ''
          },
          {
            id: Math.ceil(Math.random() * 100),
            itemName: 'Frigideira',
            itemValue: 123,
            itemDescription: 'Isso ae'
          },
        ]
      },
      {
        id: '09EJQONWD',
        spentDate: dayjs().format('15/05/2021'),
        spentTotal: 0,
        spentForm: new FormBuilder().group({
          itemName: ['', Validators.required],
          itemValue: ['', Validators.required],
          itemDescription: ['']
        }),
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
            itemName: 'Frigideira',
            itemValue: 123,
            itemDescription: 'Isso ae'
          },
        ]
      }];
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
    const itemName = currentList.spentForm.controls['itemName'];
    const itemValue = currentList.spentForm.controls['itemValue'];
    const itemDescription = currentList.spentForm.controls['itemDescription'];

    if (itemName.valid && itemValue.valid) {
      currentList.spentList.push({
        itemName: itemName.value,
        itemValue: Number(itemValue.value),
        itemDescription: itemDescription.value
      });
    }
    currentList.spentForm.reset();
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
      spentForm: new FormBuilder().group({
        itemName: ['', Validators.required],
        itemValue: ['', Validators.required],
        itemDescription: ['']
      }),
      spentList: []
    });

    this.picker.close();
    this.dateForm.controls['newDateInput'].setErrors(null);
    this.dateForm.reset();
  }

  deleteItem(spentList: [], index) {
    spentList.splice(index, 1);
    this.calculateTotal();
  }

  editItem(item, list, index) {

  }

  openBagulho(spentItem){
    this.bottomSheet.open(BottomSheetComponent, {
      data: spentItem
    });
  }
}
