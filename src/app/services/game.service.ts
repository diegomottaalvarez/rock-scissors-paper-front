import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { GameModel, RSP_VALUES } from './../models/rsp.model';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService
  ) {
    const currentGame = this.localStorageService.getCurrentGame();
    currentGame && this.setCurrentGame(currentGame);
  }

  private currentGameSubject: BehaviorSubject<GameModel> =
    new BehaviorSubject<GameModel>(null);

  private currentGame$: Observable<GameModel> =
    this.currentGameSubject.asObservable();

  public setCurrentGame(game: GameModel): void {
    this.currentGameSubject.next(game);
  }

  public getCurrentGame(): Observable<GameModel> {
    return this.currentGame$;
  }

  public deleteCurrentGame(): void {
    this.setCurrentGame(null);
    this.localStorageService.setCurrentGame(null);
  }

  public getOrCreateGame(username: string) {
    return this.apiService.post('/game', { username }).pipe(
      tap((res: GameModel) => {
        if (res) {
          this.setCurrentGame(res);
          this.localStorageService.setCurrentGame(res);
        }
      })
    );
  }

  // public getGame(username: string) {
  //   return this.apiService.get(`/game?username=${username}`).pipe(
  //     tap((res) => {
  //       if (res) {
  //         this.setCurrentGame(res);
  //         this.localStorageService.setCurrentGame(res);
  //       }
  //     })
  //   );
  // }

  public playRound(
    userPlay: RSP_VALUES,
    username: string
  ): Observable<{ game: GameModel; result: string }> {
    return this.apiService.post('/game/playRound', { username, userPlay }).pipe(
      tap((res: { game: GameModel; result: string }) => {
        if (res.game) {
          this.setCurrentGame(res.game);
          this.localStorageService.setCurrentGame(res.game);
        }
      })
    );
  }

  public getRanking(amount: number) {
    return of(amount);
    return this.apiService.get(`/ranking?amount=${amount}`);
  }
}
