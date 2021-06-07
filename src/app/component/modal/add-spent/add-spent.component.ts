import { Inject } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
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
  },
  viewProviders: [MatExpansionPanel]
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
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private dateParser: DateParseService,
    private bottomSheet: MatBottomSheet,
    private dialogRef: MatDialogRef<AddSpentComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogParameters) {

    this.newDateInput = '';
    this.addNewDate = false;
    this.disableAnimation = true;
    this.editingAction = false;

    this.dateForm = new FormBuilder().group({
      newDateInput: ['']
    });

    if (this.dialogParameters) {
      const form = new FormGroup({});

      form.addControl('itemName', new FormControl('', Validators.required));
      form.addControl('itemValue', new FormControl('', Validators.required));
      form.addControl('itemDescription', new FormControl(''));

      this.dialogParameters.spentForm = form;
      this.spentInformation = [this.dialogParameters]
    } else {
      this.spentInformation = [];
    }
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
    currentList.spentForm.patchValue();

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
      return;
    }

    const formattedDate = this.dateParser.parse(dateInput.targetElement.value);

    if (!dayjs(formattedDate).isValid()) {
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
      itemValue: Number(form.controls['itemValue'].value),
      itemDescription: form.controls['itemDescription'].value
    }
    this.calculateTotal();
    this.clearForm(form);
  }

  clearForm(form: FormGroup) {
    form.reset();
    this.editingAction = !this.editingAction;
  }

  openOptions(spentItem, spentList, spentForm, index) {
    const activeAccordion = this.accordion._headers.find(header => header._isExpanded());
    const accordionBodyContent = activeAccordion.panel._body.nativeElement.querySelector('.mat-expansion-panel-body');

    this.bottomSheet.open(BottomSheetComponent, {
      data: spentItem,
    }).afterDismissed().subscribe(result => {

      const { action } = result;

      switch (action) {
        case BottomSheetActions.EDIT_ITEM:
          this.editingAction = true;
          this.editingItem = { spentItem, spentList, spentForm, index }
          this.editItem(spentItem, spentList, spentForm);
          accordionBodyContent.scrollTo({ behavior: 'smooth', top: accordionBodyContent.scrollHeight });
          break;

        case BottomSheetActions.DELETE_ITEM:
          this.deleteItem(spentList, index);
          break;
        default:
          break;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close(this.spentInformation);
  }
}
