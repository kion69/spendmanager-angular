import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { BottomSheetActions } from 'src/app/enum/bottom-sheet';
import { expandPanel } from 'src/assets/animations/expand';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [expandPanel]
})
export class BottomSheetComponent implements OnInit {

  spentItem;
  openEdit = false;
  editSpentForm: FormGroup;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef) {
    this.editSpentForm = new FormBuilder().group({
      itemName: ['', Validators.required],
      itemValue: ['', Validators.required],
      itemDescription: ['']
    });
  }

  ngOnInit(): void {
    this.spentItem = this.data;



    this.bottomSheetRef.backdropClick().subscribe(x => {
      this.bottomSheetRef.dismiss({ action: -1 });
    });
  }

  close(action: BottomSheetActions) {
    this.bottomSheetRef.dismiss({ action: action });
  }

}
