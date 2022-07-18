import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { GameScoresComponent } from './game-scores.component';

describe('GameScoresComponent', () => {
  let component: GameScoresComponent;
  let fixture: ComponentFixture<GameScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameScoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show player name', () => {
    component.game = {
      username: 'test',
      userWins: 2,
      computerWins: 3,
      lastPlayUser: null,
      lastPlayComputer: null,
    };
    fixture.detectChanges();
    const playerName =
      fixture.debugElement.nativeElement.querySelector('.player-title');
    expect(playerName.innerHTML).toEqual('test:');
  });

  it('should show player score', () => {
    console.log('GAMEEEEE', component);
    component.game = {
      username: 'test',
      userWins: 2,
      computerWins: 3,
      lastPlayUser: null,
      lastPlayComputer: null,
    };
    fixture.detectChanges();
    const playerBoard =
      fixture.debugElement.nativeElement.querySelector('.player-score');
    expect(playerBoard.innerHTML).toEqual('2');
  });

  it('should show computer score', () => {
    component.game = {
      username: 'test',
      userWins: 2,
      computerWins: 3,
      lastPlayUser: null,
      lastPlayComputer: null,
    };
    fixture.detectChanges();
    const computerBoard =
      fixture.debugElement.nativeElement.querySelector('.computer-score');
    expect(computerBoard.innerHTML).toEqual('3');
  });
});
