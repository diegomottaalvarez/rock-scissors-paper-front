import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { GlobalRankingComponent } from './global-ranking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [GlobalRankingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paint all results', fakeAsync(() => {
    component.ranking = fakeRanking;
    fixture.detectChanges();
    const items = fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(items.length).toEqual(component.ranking.length);
  }));

  it('should put results in descending order', fakeAsync(() => {
    component.ranking = fakeRanking;

    fixture.detectChanges();
    const items = Array.from(
      fixture.debugElement.nativeElement.querySelectorAll('span.userWins')
    ) as any;
    let descending = true;

    for (let i = 1; i < items.length; i++) {
      if (+items[i].innerHTML > +items[i - 1].innerHTML) {
        descending = false;
        break;
      }
    }
    expect(descending).toBeTruthy();
  }));
});
