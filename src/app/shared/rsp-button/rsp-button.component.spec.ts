/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RspButtonComponent } from './rsp-button.component';

describe('RspButtonComponent', () => {
  let component: RspButtonComponent;
  let fixture: ComponentFixture<RspButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RspButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load received image', fakeAsync(() => {
    component.image = 'rock.svg';
    fixture.detectChanges();
    const img = fixture.debugElement.nativeElement.querySelector('img');
    expect(img.src).toContain(component.image);
  }));

  it('should call emit event', fakeAsync(() => {
    spyOn(component, 'onButtonClick');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onButtonClick).toHaveBeenCalled();
  }));
});
