import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of,
  tap,
  delay,
  take,
  catchError,
  filter,
  switchMap,
  EMPTY,
  map,
} from 'rxjs';
import {
  GameModel,
  RSPGAME_RESULT_OPTIONS,
  RSPGAME_VALUES,
  RSPGAME_WINS,
} from '../models/rsp.model';
import { ApiService } from './api.service';
import { CustomGlobalSpinnerService } from './../core/header/custom-global-spinner/services/custom-global-spinner.service';
import { DbPwaService } from './db-pwa.service';
import { CustomConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private currentGameSubject: BehaviorSubject<GameModel> =
    new BehaviorSubject<GameModel>(null);

  private currentGame$: Observable<GameModel> =
    this.currentGameSubject.asObservable();

  private lastComputerPlay: RSPGAME_VALUES;
  constructor(
    private apiService: ApiService,
    private spinnerService: CustomGlobalSpinnerService,
    private dbPwaService: DbPwaService,
    private customConnectionService: CustomConnectionService
  ) {}
  public setCurrentGame(game: GameModel): void {
    this.currentGameSubject.next(game);
  }

  public getCurrentGame(): Observable<GameModel> {
    return this.currentGame$;
  }

  public deleteCurrentGame(): void {
    this.setCurrentGame(null);
  }

  public getOrCreateGame(username: string) {
    return this.apiService.post('/game', { username }).pipe(
      tap((res: GameModel) => {
        if (res) {
          this.setCurrentGame(res);
        }
      })
    );
  }

  public playRound(
    userPlay: RSPGAME_VALUES,
    currentGame: GameModel
  ): Observable<{ game: GameModel; result: RSPGAME_RESULT_OPTIONS }> {
    this.spinnerService.startLoading();
    const { game, result } = this.computerPlay(userPlay, currentGame);
    return this.customConnectionService.hasConnection$.pipe(
      filter((res) => res !== null),
      take(1),
      switchMap((res) => {
        if (res) {
          return this.persistDataInMongo(game).pipe(
            map((res) => ({ game, result }))
          );
        } else {
          setTimeout(() => {
            this.dbPwaService.addRecord(game);
            this.setCurrentGame(game);
            this.spinnerService.stopLoading();
          }, 1000);
          return of({ game, result });
        }
      })
    );
  }

  public persistDataInMongo(game) {
    return this.apiService.post('/game/save', { game }).pipe(
      delay(1000),
      map((res: { game: GameModel }) => {
        const { game } = res;
        if (game) {
          this.setCurrentGame(res.game);
          this.spinnerService.stopLoading();
        }
        return game;
      })
    );
  }

  private computerPlay(userPlay, currentGame) {
    const computerPlay = this.getRandomItemWithException(this.lastComputerPlay);
    console.log('USER', userPlay);
    console.log('COMPUTER', computerPlay);

    const result = this.playRSP(userPlay, computerPlay);
    const game = { ...currentGame };
    game.lastPlayUser = userPlay;
    game.lastPlayComputer = computerPlay;
    this.lastComputerPlay = computerPlay;
    if (result === RSPGAME_RESULT_OPTIONS.USER_WIN) {
      game.userWins++;
    } else if (result === RSPGAME_RESULT_OPTIONS.COMPUTER_WIN) {
      game.computerWins++;
    }
    return { game, result };
  }

  public getRanking(amount: number) {
    return this.apiService.get(`/game/ranking?amount=${amount}`);
  }

  playRSP = (userPlay, computerPlay) => {
    if (userPlay === computerPlay) {
      return RSPGAME_RESULT_OPTIONS.TIE;
    } else if (RSPGAME_WINS.get(userPlay) === computerPlay) {
      return RSPGAME_RESULT_OPTIONS.USER_WIN;
    } else {
      return RSPGAME_RESULT_OPTIONS.COMPUTER_WIN;
    }
  };

  getRandomItemWithException = (lastItem) => {
    const possibleValues = Object.values(RSPGAME_VALUES).filter(
      (item) => item != lastItem
    );
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    return possibleValues[randomIndex];
  };
}
