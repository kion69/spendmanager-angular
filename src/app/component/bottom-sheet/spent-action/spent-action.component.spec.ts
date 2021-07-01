import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpentActionComponent } from './spent-action.component';

describe('BottomSheetComponent', () => {
  let component: SpentActionComponent;
  let fixture: ComponentFixture<SpentActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpentActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
