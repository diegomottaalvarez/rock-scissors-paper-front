import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  async,
} from '@angular/core/testing';

import { GlobalRankingComponent } from './global-ranking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlineStatusService } from 'ngx-online-status';
import { CustomGlobalSpinnerService } from './../core/header/custom-global-spinner/services/custom-global-spinner.service';
import { MatTableModule } from '@angular/material/table';

describe('GlobalRankingComponent', () => {
  let component: GlobalRankingComponent;
  let fixture: ComponentFixture<GlobalRankingComponent>;

  let fakeRanking = [
    {
      username: 'test',
      userWins: 12,
      computerWins: 0,
      lastPlayComputer: null,
      lastPlayUser: null,
    },
    {
      username: 'test',
      userWins: 7,
      computerWins: 16,
      lastPlayComputer: null,
      lastPlayUser: null,
    },
    {
      username: 'test',
      userWins: 5,
      computerWins: 2,
      lastPlayComputer: null,
      lastPlayUser: null,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatTableModule],

      declarations: [GlobalRankingComponent],
      providers: [OnlineStatusService, CustomGlobalSpinnerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paint all results ', (done) => {
    component.ranking = fakeRanking;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement
        .querySelector('tbody')
        .querySelectorAll('tr');
      expect(tableRows.length).toBe(component.ranking.length);
      done();
    });
  });

  it('should put results in descending order', (done) => {
    component.ranking = fakeRanking;

    fixture.detectChanges();
    fixture.whenStable().then((res) => {
      fixture.detectChanges();
      const items = Array.from(
        fixture.debugElement.nativeElement.querySelectorAll(
          'td.mat-column-userWins'
        )
      ) as any;
      let descending = true;

      for (let i = 1; i < items.length; i++) {
        if (+items[i].innerHTML > +items[i - 1].innerHTML) {
          descending = false;
          break;
        }
      }
      expect(descending).toBeTruthy();
      done();
    });
  });
});
