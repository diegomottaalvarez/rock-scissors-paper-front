import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainGameComponent } from './main-game.component';
import { CustomGlobalSpinnerService } from './../core/header/custom-global-spinner/services/custom-global-spinner.service';
import { OnlineStatusService } from 'ngx-online-status';
describe('MainGameComponent', () => {
  let component: MainGameComponent;
  let fixture: ComponentFixture<MainGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CustomGlobalSpinnerService, OnlineStatusService],
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [MainGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
