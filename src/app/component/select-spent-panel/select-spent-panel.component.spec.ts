import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpentPanelComponent } from './select-spent-panel.component';

describe('SelectSpentPanelComponent', () => {
  let component: SelectSpentPanelComponent;
  let fixture: ComponentFixture<SelectSpentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpentPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
