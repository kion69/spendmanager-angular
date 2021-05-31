import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import dayjs from 'dayjs';
import { BottomSheetActions } from 'src/app/enum/bottom-sheet';
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
export class AddSpentComponent implements OnInit {

  dateForm: FormGroup;
  spentInformation = Array<any>();
  disableAnimation: boolean;
  addNewDate: boolean;
  newDateInput: string;
  editingAction: boolean;
  editingItem: any;

  @ViewChild('picker') picker;
  @ViewChild('form') form: ElementRef;

  constructor(
    private dateParser: DateParseService,
    private bottomSheet: MatBottomSheet) {
    this.newDateInput = '';
    this.addNewDate = false;
    this.disableAnimation = true;
    this.editingAction = false;

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
        id: Math.ceil(Math.random() * 100),
        itemName: itemName.value,
        itemValue: Number(itemValue.value),
        itemDescription: itemDescription.value
      });
    }
    currentList.spentForm.reset();
    this.editingAction = false;
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

    // this.picker.close();
    this.dateForm.reset();
  }

  deleteItem(spentList: [], index) {
    spentList.splice(index, 1);
    this.calculateTotal();
  }

  editItem(item, spentList, spentForm: FormGroup) {
    spentForm.controls['itemName'].setValue(item.itemName);
    spentForm.controls['itemValue'].setValue(item.itemValue);
    spentForm.controls['itemDescription'].setValue(item.itemDescription);
  }

  saveItem(list, form: FormGroup, abc, i) {
    const { index } = this.editingItem;
    list[index] = {
      itemName: form.controls['itemName'].value,
      itemValue: form.controls['itemValue'].value,
      itemDescription: form.controls['itemDescription'].value
    }
    this.calculateTotal();
  }

  clearForm(form: FormGroup) {
    form.reset();
    this.editingAction = !this.editingAction;
  }

  openOptions(spentItem, spentList, spentForm, index) {
    this.bottomSheet.open(BottomSheetComponent, {
      data: spentItem,
    }).afterDismissed().subscribe(result => {

      const { action } = result;

      switch (action) {
        case BottomSheetActions.EDIT_ITEM:
          (this.form.nativeElement as HTMLElement).scrollTop = 999;
          this.editingAction = true;
          this.editingItem = { spentItem, spentList, spentForm, index }
          this.editItem(spentItem, spentList, spentForm);
          break;

        case BottomSheetActions.DELETE_ITEM:
          this.deleteItem(spentList, index);
          break;
        default:
          break;
      }
    });
  }
}
