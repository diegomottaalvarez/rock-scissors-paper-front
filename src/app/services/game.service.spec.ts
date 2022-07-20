import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RSPGAME_VALUES } from '../models/rsp.model';
import { environment } from './../../environments/environment';

describe('GameService', () => {
  let httpController: HttpTestingController;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GameService],
    });
    service = TestBed.inject(GameService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should take more than 1 second to get computer`s response', (done) => {
    const username = 'test';
    const userPlay = RSPGAME_VALUES.PAPER;
    const start = Date.now();
    service.playRound(userPlay, username).subscribe((res) => {
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(1000);
      done();
    });

    const req = httpController.expectOne(
      `${environment.apiUrl}/game/playRound`
    );

    req.flush([username, userPlay, start]);
  });
});
