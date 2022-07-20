import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGlobalSpinnerComponent } from './custom-global-spinner.component';

describe('CustomGlobalSpinnerComponent', () => {
  let component: CustomGlobalSpinnerComponent;
  let fixture: ComponentFixture<CustomGlobalSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGlobalSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGlobalSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
