import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DeleteButtonComponent } from './delete-button.component';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call end game when button is clicked', fakeAsync(() => {
    spyOn(component, 'endGame');
    const deleteButton =
      fixture.debugElement.nativeElement.querySelector('button');
    deleteButton.click();
    tick();
    expect(component.endGame).toHaveBeenCalled();
  }));
});
