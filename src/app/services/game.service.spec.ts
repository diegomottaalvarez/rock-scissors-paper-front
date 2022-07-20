import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  RSPLSGAME_RESULT_OPTIONS,
  RSPLSGAME_VALUES,
} from '../models/rsp.model';
import { environment } from './../../environments/environment';
import { CustomGlobalSpinnerService } from './../core/header/custom-global-spinner/services/custom-global-spinner.service';
import { OnlineStatusService } from 'ngx-online-status';
describe('GameService', () => {
  let httpController: HttpTestingController;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GameService, CustomGlobalSpinnerService, OnlineStatusService],
    });
    service = TestBed.inject(GameService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should take more than 1 second to get computer`s response', (done) => {
    const username = 'test';
    const userPlay = RSPLSGAME_VALUES.PAPER;
    const start = Date.now();
    service.playRound(userPlay, username).subscribe((res) => {
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(1000);
      done();
    });

    const req = httpController.expectOne(`${environment.apiUrl}/game/save`);

    req.flush([username, userPlay, start]);
  });

  it('should create a computer response different from the previous one', () => {
    const allAnswersDifferent = [...Array(100).keys()]
      .map(() => service.getRandomItemWithException(RSPLSGAME_VALUES.ROCK))
      .every((item) => item !== RSPLSGAME_VALUES.ROCK);
    expect(allAnswersDifferent).toBeTruthy();
  });

  it('should rock win to scissors', () => {
    const userPlay = RSPLSGAME_VALUES.ROCK;
    const computerPlay = RSPLSGAME_VALUES.SCISSORS;
    const result = service.playRSP(userPlay, computerPlay);
    expect(result).toBe(RSPLSGAME_RESULT_OPTIONS.USER_WIN);
  });

  it('should scissors win to paper', () => {
    const userPlay = RSPLSGAME_VALUES.SCISSORS;
    const computerPlay = RSPLSGAME_VALUES.PAPER;
    const result = service.playRSP(userPlay, computerPlay);
    expect(result).toBe(RSPLSGAME_RESULT_OPTIONS.USER_WIN);
  });

  it('should paper win to rock', () => {
    const userPlay = RSPLSGAME_VALUES.PAPER;
    const computerPlay = RSPLSGAME_VALUES.ROCK;
    const result = service.playRSP(userPlay, computerPlay);
    expect(result).toBe(RSPLSGAME_RESULT_OPTIONS.USER_WIN);
  });
});
